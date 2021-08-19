FROM node:lts-buster-slim
RUN apt-get update && apt-get upgrade -y
EXPOSE 3000
WORKDIR "/webapp"
RUN npm start &
