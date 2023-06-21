# Simple Crud With Out Using Express

# Introduction
This project demonstrates the implementation of a server-side application using Node.js without using the Express framework. It provides APIs to create, read, update, and delete states and cities. The application connects to PostgreSQL database using the provided username and password.The application allows you to manage states and cities, with a relationship between the two tables.

# Project Setup
- Clone the repository: https://github.com/bhargav1sarvadhi/simple_crud_whitout_express.git
- Navigate to the project directory: cd Simple-crud

# Prerequisites
To run this application, you need to have the following software installed on your machine:
- Node.js
- PostgreSQL

# Database Setup
- Create a database in your chosen database management system (PostgreSQL).
- Set up the database connection configuration in the config.js file.

# Usage
- Start the server: node app.js
- Access the APIs using the specified endpoints and methods (e.g., http://localhost:3000/states/)

# API Endpoints

- POST /state/: Create a new state.
- POST /cities/: Create a new city.
- GET /states/: Get all states with their appropriate cities.
- GET /cities/: Get all cities with their appropriate state.
- GET /state/select/?id: Get all cities belonging to a selected state.
- GET /cities/select/?id: Get the state of a selected city.
- PUT /state/?id: Update a state.
- PUT /cities/?id: Update a city.
- DELETE /state/?id: Delete a state.
- DELETE /city/?id: Delete a city.

# Installation
- Clone this repository to your local machine or download the source code.
 
- Navigate to the project directory.

- Install the required dependencies by running the following command:

``` npm  install ```

# API Documentation

- Create State
- Endpoint: /states
- Method: POST
- Request Body:
```

   {
      "name": "State Name"
   }

```
- **Response**:
```

     {
        "status_code": 200,
         "data":{
                  "id": 1,
                  "name": "State Name"
                },
       "message": "Successfully created state!"
    }

```

**Create City**
- **Endpoint: /cities**
- **Method:** POST
- **Request Body:**
```

      {
         "name": "City Name",
         "state_id": 1
      }

```

- **Response:**

```

{
     "status_code": 200,
        "data": {
                    "id": 1,
                    "name": "City Name",
                    "state_id": 1
                },
  "message": "Successfully created city!"
}

```











