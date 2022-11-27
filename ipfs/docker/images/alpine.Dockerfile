FROM alpine:latest

RUN apk update && apk upgrade
RUN apk add curl
ENTRYPOINT ["tail", "-f", "/dev/null"]