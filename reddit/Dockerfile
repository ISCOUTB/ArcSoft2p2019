#Use php
FROM php:7.2.23-cli-buster

#install Laravel Lumen
RUN composer global require "laravel/lumen-installer"

#run server on docker
CMD php -S 0.0.0.0:8000 -t /src/public