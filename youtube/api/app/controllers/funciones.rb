module Funciones
    # Sample Ruby code for user authorization

    require 'rubygems'
    gem 'google-api-client', '>0.7'
    require 'google/apis'
    require 'google/apis/youtube_v3'
    require 'googleauth'
    require 'googleauth/stores/file_token_store'

    require 'fileutils'
    require 'json'

    # REPLACE WITH VALID REDIRECT_URI FOR YOUR CLIENT
    REDIRECT_URI = 'http://localhost'
    APPLICATION_NAME = 'YouTube Data API Ruby Tests'

    # REPLACE WITH NAME/LOCATION OF YOUR client_secrets.json FILE
    CLIENT_SECRETS_PATH = 'client_secret.json'

    # REPLACE FINAL ARGUMENT WITH FILE WHERE CREDENTIALS WILL BE STORED
    CREDENTIALS_PATH = File.join(Dir.home, '.credentials',
                             "youtube-quickstart-ruby-credentials.yaml")

    # SCOPE FOR WHICH THIS SCRIPT REQUESTS AUTHORIZATION
    SCOPE = Google::Apis::YoutubeV3::AUTH_YOUTUBE_READONLY

    FileUtils.mkdir_p(File.dirname(CREDENTIALS_PATH))
    $client_id = Google::Auth::ClientId.from_file(CLIENT_SECRETS_PATH)
    $token_store = Google::Auth::Stores::FileTokenStore.new(file: CREDENTIALS_PATH)
    $authorizer = Google::Auth::UserAuthorizer.new(
        $client_id, SCOPE, $token_store)
    def authorize
        user_id = 'default'
        credentials = $authorizer.get_credentials(user_id)
        if credentials.nil?
            url = $authorizer.get_authorization_url(base_url: REDIRECT_URI)
            return url
        end
    end
    def get_code(code)
        user_id = 'default'
        credentials = $authorizer.get_credentials(user_id)
        credentials = $authorizer.get_and_store_credentials_from_code(
            user_id: user_id, code: code, base_url: REDIRECT_URI)
        credentials
    end
    def authorize_org
        user_id = 'default'
        credentials = $authorizer.get_credentials(user_id)

        if credentials.nil?
            code = authorize()
            get_code(code)
        end
        credentials
    end
    def channels_list_by_username(service, part, opcion, **params)
        response = service.list_channels(part, params).to_json
        item = JSON.parse(response).fetch("items")[0]
        string = {
            'followers'=> "#{item.fetch("statistics").fetch("subscriberCount")}".to_i,
            'fullname'=> "#{item.fetch("snippet").fetch("title")}",
            'ID'=> "#{item.fetch("id")}",
            'post'=> "#{item.fetch("statistics").fetch("videoCount")}".to_i,
            'username'=> "#{item.fetch("snippet").fetch("title")}",
        }
        json=JSON[string]
        if opcion == 0
            puts (json)
            return json  
        else
            return string = {'id' =>"#{item.fetch("id")}", 'followers'=> "#{item.fetch("statistics").fetch("subscriberCount")}".to_i, 'username'=> "#{item.fetch("snippet").fetch("title")}",}
        end
    end

    def videoinfo(service, part, **params)
        response = service.list_videos(part, params).to_json
        item = JSON.parse(response).fetch("items")[0]
        string = {
            'ID'=> "#{item.fetch("id")}",
            'likes'=> "#{item.fetch("statistics").fetch("likeCount")}".to_i,
        }
        puts (item)
        return string
    end
  
    def videolist(service, part, **params)
        response = service.list_activities(part, params).to_json
        x = [*0..(params.fetch(:max_results).to_i)-1]
        videoIds = Array.new((params.fetch(:max_results).to_i))
        channel_info = channels_list_by_username(service, 'snippet,contentDetails,statistics', 1, id: params.fetch(:channel_id))
        string = Array.new
        for i in x do
            item = JSON.parse(response).fetch("items")[i]
            videoIds[i]= (item.fetch("contentDetails").fetch("upload").fetch("videoId")).to_s
            video_info = videoinfo(service, "statistics", id: videoIds[i])
            datos = Hash.new
            datos['ID'] = video_info.fetch('ID')
            datos['efficiency'] = ((video_info.fetch('likes').to_f/channel_info.fetch('followers').to_f)*100).to_s
            datos['likes'] = video_info.fetch('likes').to_s
            datos['username'] = channel_info.fetch('username')
            string << datos
        end
        return string.to_json()
    end
    def search_by_username(service, part, **params)
        response = service.list_searches(part, params).to_json
        item = JSON.parse(response).fetch("items")[0]
        channel_id = item.fetch("id").fetch("channelId")
        channels_list_by_username(service, 'snippet,contentDetails,statistics', 0, id: channel_id)
    end
    def search_id(service, part, **params)
        response = service.list_searches(part, params).to_json
        item = JSON.parse(response).fetch("items")[0]
        return item.fetch("id").fetch("channelId")
    end
end