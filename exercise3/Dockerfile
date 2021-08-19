FROM node:lts-buster-slim
RUN apt-get update && apt-get upgrade -y
COPY webapp/ ./webapp/
EXPOSE 3000
WORKDIR "/webapp"
RUN npm start &
