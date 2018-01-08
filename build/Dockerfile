
FROM node:8.7.0-alpine
MAINTAINER april_liu <329565409@qq.com>

ARG BUILD_ENV
COPY . /srv/source
RUN cd /srv/source && \
    echo "Installing dependencies... `date`" && \
    yarn && \
    echo "Starting dist build... `date`" && \
    npm run build

FROM nginx:stable-alpine
MAINTAINER april_liu <329565409@qq.com>

COPY --from=0 /srv/source/dist /usr/share/nginx/html/account
COPY --from=0 /srv/source/build/nginx.conf /etc/nginx/conf.d/default.conf

RUN sed -i '/access_log/c \    access_log \/dev\/null;server_tokens off;' /etc/nginx/nginx.conf
