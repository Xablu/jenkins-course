This repository is to be used in addition to the training content by Xablu.  
The content in this repository is to be used for training purposes only.  
The scripts are tested on Ubuntu.  
  
## Exercise 1  

First install docker, using the install-docker.sh script.  
Second run the Jenkins docker container by running docker-compose up .  
After completing the installation wizard, install the plugins:
* NodeJS plugin
* Docker Plugin

## Exercise 2

In exercise 2 you add a freestyle pipeline by using the GUI. The React example app in the webapp folder in this repository is used as a source.  

## Exercise 3  

Exercise 3 builds a React app using a Jenkins pipeline file. The Jenkinsfile in the exercise 3 folder is to be used.  
The subfolder "build-docker-image" in this folder contains an example to build a docker container file, outside of Jenkins.  
The resulting container can then be started by running the command:  

    docker run -p 80:80 -d mynewnodejsapp:latest