# Docker Demo 

## Prerequisites

Before running the application, make sure you have the following installed:

- Docker
- Docker Compose
- MongoDB running locally on your machine (running on mongodb://localhost:27017)

## Running the Application

1. Clone the repository

git clone https://github.com/bacelarfc/portfolio-demo

2. Build and run the application

Run the following command to build and start the application using Docker Compose:

```
docker-compose up --build
``` 

3. Access the Application

Once the application is up and running, you can access it in your browser at: http://localhost:5001

Essentially, this will build the application and start it in a Docker container. 

## Stop the Application

To stop the application and remove the running containers:

```
docker-compose down
```


