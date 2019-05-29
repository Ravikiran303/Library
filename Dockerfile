# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /user/app
COPY . /user/app
RUN npm install --silent

EXPOSE 3000
# start app
CMD ["npm", "start"]
