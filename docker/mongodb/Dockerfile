# Use the official MongoDB image as the base image
FROM mongo:latest

# Create a directory to store MongoDB data
RUN mkdir -p /data/db

# Set the working directory
WORKDIR /data

# Expose the default MongoDB port
EXPOSE 27017

# Start MongoDB when the container starts
CMD ["mongod"]
