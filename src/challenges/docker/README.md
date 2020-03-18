# Challenge - Docker

## Description

Create a three tier application (presentation layer, application layer and database).

## Goal Requirements

1. Your solution must be hosted in GitHub.
2. To obtain full marks, only the following three commands will be executed:

    ```shell
    git clone https://github.com/[org/username]/DockerChallenge.git
    cd DockerChallenge
    docker-compose up
    ```

3. The presentation layer container **must** be [NGINX](https://hub.docker.com/_/nginx)
4. The application layer container **must** be [Node](https://hub.docker.com/_/node/)
5. The database layer container **must** be [PostgreSQL](https://hub.docker.com/_/postgres)
6. Application layer must query the database for data. Doesn't matter what.
7. The presentation layer will act as a reverse proxy in this challenge. Please have requests of http://localhost/app forward to your application container. See [Reverse Proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)

## Bonus

1. No environment settings are committed into your repository. This includes:
   - Database information (username, password, host, port, etc...)