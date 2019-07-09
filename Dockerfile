FROM node:latest
RUN mkdir -p /home/Service
COPY . /home/Service
WORKDIR /home/Service
EXPOSE 8000
RUN npm install
CMD ["npm", "run", "serve"]
