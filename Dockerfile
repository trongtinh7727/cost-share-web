# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application (force Vite to listen on all interfaces)
CMD ["npm", "run", "dev"]
