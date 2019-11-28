FROM ruby:2.6
RUN apt-get update -qq && apt-get install -y nodejs yarn

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 80

ADD . .
WORKDIR /api
RUN apt install yarn
RUN npm install -g yarn
RUN bundle install

CMD ["rails", "server", "-p", "80", "-b", "0.0.0.0"]