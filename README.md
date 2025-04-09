<h1 align="center"> 📋 Registration System

![node](https://img.shields.io/static/v1?label=node&message=22.14.0&color=2d3748&logo=node.js&style=flat-square)
![typescript](https://img.shields.io/static/v1?label=typescript&message=5.8.2&color=2d3748&logo=typescript&style=flat-square)
[![eslint](https://img.shields.io/badge/eslint-9.22.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/laporeon/registration-system/blob/main/LICENSE.md)

</h1>

## Table of Contents

- [About](#about)
- [Requirements](#requirements)
- [Installing](#installing)
- [Configuring](#configuring)
  - [.env](#env)
  - [Docker](#docker)
  - [MongoDB](#mongodb)
  - [Seeding Database](#seeding-database)
- [Usage](#usage)
  - [Routes](#routes)
    - [Requests](#requests)

## About

My solution for the backend challenge found in this [repository](https://github.com/Wiredcraft/test-backend). It's a RESTful API to simulate a user registration system.

**Key features:**

- Schema validation using ZOD for request payloads.
- Full CRUD operations for user accounts.
- JWT token authentication.
- Swagger documentation for all endpoints.
- Database seeding via `seed.ts` script.

## Requirements:

- [NodeJS](https://nodejs.org/en) v.22 or higher
- [Docker](https://www.docker.com/)

If you use [NVM](https://github.com/nvm-sh/nvm), just run `nvm use` in the root folder.

## **Installing:**

Yarn:

```bash
$ yarn
```

NPM:

```bash
$ npm i
```

## **Configuring**

### **.env**

Rename the `.env.example` file to `.env` and update the variables with your settings.

| key            | description                         | default    |
| -------------- | ----------------------------------- | ---------- |
| PORT           | Port number where the app will run. | `3000`     |
| MONGO_USER     | MongoDB username                    | root       |
| MONGO_PASSWORD | MongoDB password                    | password   |
| MONGO_DB       | MongoDB database name               | wiredcraft |
| JWT_SECRET     | Random string for JWT token signing | -          |
|                |

### Docker

For the fastest setup, it is recommended to use [Docker Compose](https://docs.docker.com/compose/):

```bash
# Option 1: Using npm script (recommended)
$ npm run docker:up
```

```bash
# Option 2: Direct docker compose command
$ docker compose up -d
```

Once started, application will be available at `http://localhost:3333/`.

### MongoDB

If you prefer running MongoDB locally instead of using Docker, ensure [MongoDB](https://www.mongodb.com/) is installed and running on your machine. Then, start the application with:

```bash
$ npm run start:dev
```

Once started, application will be available at `http://localhost:3000/`.

### Seeding database

Optionally, you can populate database running the following script:

```bash
$ npm run db:seed
```

## Usage

### **Routes**

| Route          | HTTP Method | Params                                                                      | Description                                | Auth Method |
| -------------- | ----------- | --------------------------------------------------------------------------- | ------------------------------------------ | ----------- |
| `/auth/signup` | POST        | Body with `name`, `email`, `password`, `dob`, `address` and `description*`. | Register a new user                        | None        |
| `/auth/login`  | POST        | Body with `email` and `password`.                                           | Login a user                               | None        |
| `/users/:id`   | GET         | `:id` (optional)                                                            | Retrieves all users or retrieve user by id | Bearer      |
| `/users/:id`   | PUT         | `:id` + Body with params to be updated.                                     | Update user information                    | Bearer      |
| `/users/:id`   | DELETE      | `:id`                                                                       | Delete a user                              | Bearer      |

#### Requests

- `POST /auth/signup`

Request body:

```json
{
  "name": "Sabrina Carpenter",
  "email": "sabrinacarpenter@gmail.com",
  "password": "!P4ssw0rd123",
  "dob": "1999-05-11",
  "address": {
    "street": "Fake Name Street",
    "number": 10,
    "city": "Quakertown",
    "zipCode": 18951
  },
  "description": "5'0\", blonde, singer, actress."
}
```

- `POST /auth/login`

Request body:

```json
{
  "email": "sabrinacarpenter@gmail.com",
  "password": "!P4ssw0rd123"
}
```

- `PUT /users/:id`

Request body:

```json
{
  "address": {
    "street": "New Fake Street",
    "number": 200,
    "city": "Las Vegas",
    "zipCode": 2050
  },
  "description": "Single, brunette."
}
```

[⬆ Back to the top](#--registration-system)
