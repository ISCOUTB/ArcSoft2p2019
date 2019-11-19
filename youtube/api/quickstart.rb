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

def authorize
  FileUtils.mkdir_p(File.dirname(CREDENTIALS_PATH))

  client_id = Google::Auth::ClientId.from_file(CLIENT_SECRETS_PATH)
  token_store = Google::Auth::Stores::FileTokenStore.new(file: CREDENTIALS_PATH)
  authorizer = Google::Auth::UserAuthorizer.new(
    client_id, SCOPE, token_store)
  user_id = 'default'
  credentials = authorizer.get_credentials(user_id)
  if credentials.nil?
    url = authorizer.get_authorization_url(base_url: REDIRECT_URI)
    puts "Open the following URL in the browser and enter the " +
         "resulting code after authorization"
    puts url
    code = gets
    credentials = authorizer.get_and_store_credentials_from_code(
      user_id: user_id, code: code, base_url: REDIRECT_URI)
  end
  credentials
end

# Initialize the API
service = Google::Apis::YoutubeV3::YouTubeService.new
service.client_options.application_name = APPLICATION_NAME
service.authorization = authorize

# Sample ruby code for channels.list

def channels_list_by_username(service, part, opcion, **params)
  response = service.list_channels(part, params).to_json
  item = JSON.parse(response).fetch("items")[0]
  string = {
    'id'=> "#{item.fetch("id")}",
    'username'=> "#{item.fetch("snippet").fetch("title")}",
    'fullname'=> "#{item.fetch("snippet").fetch("title")}",
    'followers'=> "#{item.fetch("statistics").fetch("subscriberCount")}".to_i,
    'post'=> "#{item.fetch("statistics").fetch("videoCount")}".to_i,
    }
  json=JSON[string]
  if opcion == 0
    puts (json)
    return json  
  else
    return string = {'id' =>"#{item.fetch("id")}", 'followers'=> "#{item.fetch("statistics").fetch("subscriberCount")}".to_i}
  end
end

channels_list_by_username(service, 'snippet,contentDetails,statistics', 0, for_username: 'GoogleDevelopers')

def videoinfo(service, part, **params)
  response = service.list_videos(part, params).to_json
  item = JSON.parse(response).fetch("items")[0]
  string = {
    'id'=> "#{item.fetch("id")}",
    'likes'=> "#{item.fetch("statistics").fetch("likeCount")}".to_i,
  }
  return string
end

def videolist(service, part, **params)
  response = service.list_activities(part, params).to_json
  x = [*0..(params.fetch(:max_results).to_i)-1]
  videoIds = Array.new((params.fetch(:max_results).to_i))
  channel_info = channels_list_by_username(service, 'snippet,contentDetails,statistics', 1, id: params.fetch(:channel_id))
  string = Hash.new
  for i in x do
    item = JSON.parse(response).fetch("items")[i]
    videoIds[i]= (item.fetch("contentDetails").fetch("upload").fetch("videoId")).to_s
    video_info = videoinfo(service, "statistics", id: videoIds[i])
    video_info['efficiency'] = (video_info.fetch('likes').to_f/channel_info.fetch('followers').to_f)*100
    video_info['user'] = video_info.fetch('id')
    string[(i+1).to_s]=video_info
  end

  x = JSON[string]
  puts (x)
  return x
end

videolist(service, 'contentDetails', channel_id:'UC_x5XG1OV2P6uZZ5FSM9Ttw', max_results:'5')