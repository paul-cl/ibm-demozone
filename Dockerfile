# Specify a base image
FROM node:alpine

RUN apk update && apk upgrade

# Create working directory and copy the app before running yarn install as the artifactory
# credentials can be inside .npmrc
WORKDIR /app
COPY . ./

# Run yarn install
RUN yarn install



ENV PORT 3000
EXPOSE 3000

# Define command to run the application when the container starts
CMD [ "yarn", "start" ]
