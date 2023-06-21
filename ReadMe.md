#Simple Crud With out using Express

#Introduction

This project demonstrates the implementation of a server-side application using Node.js without using the Express framework. It provides APIs to create, read, update, and delete states and cities. The application connects to PostgreSQL database using the provided username and password.


#Usage
The application provides the following API endpoints:

POST /state/: Create a new state.
POST /cities/: Create a new city.
GET /states/: Get all states with their appropriate cities.
GET /cities/: Get all cities with their appropriate state.
GET /state/select/?id: Get all cities belonging to a selected state.
GET /cities/select/?id: Get the state of a selected city.
PUT /state/?id: Update a state.
PUT /cities/?id: Update a city.
DELETE /state/?id: Delete a state.
DELETE /city/?id: Delete a city.







