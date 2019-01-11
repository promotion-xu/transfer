FROM registry.docker-cn.com/library/node:latest

WORKDIR /home/Service
# Bundle app source
COPY . /home/Service
#RUN yarn install
RUN npm rebuild node-sass
EXPOSE 8989 
CMD [ "npm", "run", "serve" ]
