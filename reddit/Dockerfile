#Use php
FROM php:7.2.23-cli-buster

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN apt-get update && apt-get install -y zlib1g-dev zip && docker-php-ext-install zip

EXPOSE 80

#run server on docker

