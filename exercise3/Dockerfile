FROM node:lts-buster-slim
RUN apt-get update && apt-get upgrade -y
ENV PATH /webapp/node_modules/.bin:$PATH
COPY build/ ./webapp/
EXPOSE 3000
WORKDIR "/webapp"
CMD ["npm", "start"]
