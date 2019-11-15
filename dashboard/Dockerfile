FROM node

ENV CORDOVA_VERSION 9.0.0

RUN npm i -g --unsafe-perm cordova@${CORDOVA_VERSION}

ENV IONIC_VERSION 5.2.3

RUN apt-get update && apt-get install -y git bzip2 openssh-client && \
    npm i -g --unsafe-perm ionic@${IONIC_VERSION} && \
    ionic --no-interactive config set -g daemon.updates false && \
    rm -rf /var/lib/apt/lists/* && apt-get clean

RUN git clone https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019.git

WORKDIR ArcSoft2p2019/dashboard
