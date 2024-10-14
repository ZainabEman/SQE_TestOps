# Use the official Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Install CodeceptJS, Playwright, Allure (not globally)
RUN npm install codeceptjs playwright @codeceptjs/allure-legacy

# Install Allure command-line tool globally
RUN npm install -g allure-commandline

# Copy local code to the container image.
COPY . .

# Expose port 8080 to the outside once the container is launched
EXPOSE 8080

# Define environment variables for Allure reports
ENV ALLURE_RESULTS=/usr/src/app/allure-results
ENV ALLURE_REPORT=/usr/src/app/allure-report

# Ensure the Allure results and report directories exist
RUN mkdir -p $ALLURE_RESULTS $ALLURE_REPORT

# Run the web service on container startup.
CMD [ "node", "main.js" ]
