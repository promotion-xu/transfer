FROM node:11.6.0-alpine

WORKDIR /home/Service
# Bundle app source
COPY . /home/Service
# RUN yarn install

EXPOSE 8989 
CMD [ "npm", "run", "serve" ]
