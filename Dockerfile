# Specify a base image
FROM node:14.5.0 as build-deps

# Create working directory and copy the app before running yarn install as the artifactory
# credentials can be inside .npmrc
WORKDIR /usr/src/app
COPY . ./

# Run yarn install
RUN yarn install

# Build the project
CMD ["yarn", "run", "build"]

# Install serve command for yarn package manager
RUN yarn global add serve

# Navigate to build folder
# WORKDIR /usr/src/app/build

ENV HOST 0.0.0.0
EXPOSE 3000

# Start the application
CMD [ "yarn", "start" ]
