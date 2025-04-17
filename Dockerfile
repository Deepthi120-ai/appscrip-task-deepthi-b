# Use the official Node.js image as a base
FROM node:16-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the React app
FROM nginx:alpine

# Copy the built React app from the previous stage to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that Nginx listens on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]