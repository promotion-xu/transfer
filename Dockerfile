FROM registry.docker-cn.com/library/node:latest

WORKDIR /home/Service
# Bundle app source
COPY . /home/Service
RUN yarn install && npm install -g @vue/cli
EXPOSE 8989
CMD [ "npm", "run", "serve" ]
