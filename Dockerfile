FROM node:14.16.0
WORKDIR /usr/src/app
RUN apt-get update -qq && \
    apt-get install -y vim && \
    yarn add typescript --dev