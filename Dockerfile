FROM node:10.15.0

WORKDIR /home/Service
# Bundle app source
COPY . /home/Service
# RUN yarn install
# ssss
EXPOSE 8989 
CMD [ "npm", "run", "serve" ]
