FROM node

WORKDIR /dashboard

COPY . /dashboard

ENV CORDOVA_VERSION 9.0.0

ENV IONIC_VERSION 5.2.3

RUN npm i -g @angular/cli

RUN npm i -g --unsafe-perm cordova@${CORDOVA_VERSION}

RUN npm install

RUN apt-get update && apt-get install -y git bzip2 openssh-client && \
    npm i -g --unsafe-perm ionic@${IONIC_VERSION} && \
    ionic --no-interactive config set -g daemon.updates false && \
    rm -rf /var/lib/apt/lists/* && apt-get clean 

EXPOSE 80

ENTRYPOINT ["ionic"]
CMD ["serve", "-p", "80", "--address", "0.0.0.0"]



