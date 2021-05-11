# Specify a base image
FROM node:14.5.0 as build-deps

# Create working directory and copy the app before running yarn install as the artifactory
# credentials can be inside .npmrc
# Give owner rights to the current user
RUN mkdir -p /app
#RUN chmod -R 777 /app

WORKDIR /app
COPY . ./

# Run yarn install
RUN yarn install

# Build the project
# CMD ["yarn", "run", "build"]

# Install serve command for yarn package manager
# RUN yarn global add serve

# Navigate to build folder
# WORKDIR /usr/src/app/build


RUN chmod -R u+x /app && \
    chgrp -R 0 /app && \
    chmod -R g=u /app /etc/passwd


ENV PORT 3000
EXPOSE 3000


# Start the application
CMD [ "yarn", "start" ]
