FROM node:lts-buster-slim
RUN apt-get update && apt-get upgrade -y
COPY public/ ./public/
EXPOSE 3000
WORKDIR "/public"
