const pool = require('../config/postgresql');
const errorHandler = require('../Utils/errorHandler');

const insertcities = (req, res) => {
    try {
        const { name, state_id } = req.body;
        const query = 'INSERT INTO cities (name, state_id) VALUES ($1,(SELECT id FROM state WHERE state = $2)) RETURNING cities'
        const VALUES = [name, state_id];
        pool.query(query, VALUES, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully city inserted!!", data: data.rows }))
            }
        })
    } catch (error) {
        errorHandler(error, req, res);
    }
}
const getCities = (req, res) => {
    try {
        const query = 'SELECT name,state.state FROM cities INNER JOIN  state ON cities.state_id = state.id';
        pool.query(query, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully cities Finded!!", data: data.rows }))
            }
        })
    } catch (error) {
        errorHandler(error, req, res);
    }
}

const deletecities = (req, res, id) => {
    try {
        const query = 'DELETE FROM cities WHERE id =($1) RETURNING cities'
        const VALUES = [id]
        pool.query(query, VALUES, (error, data) => {
            if (error || data.rowCount === 0) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully city Deleted!!", data: data.rows }))
            }
        })
    } catch (error) {
        errorHandler(error, req, res);
    }
}
const updateCities = (req, res, id) => {
    try {
        const { name, state_id } = req.body;
        const query = 'UPDATE cities SET name = $1, state_id =(SELECT id FROM state WHERE state = ($2) LIMIT 1) WHERE id=$3 RETURNING *'
        const VALUES = [name, state_id, id]
        pool.query(query, VALUES, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully city updated!!", data: data.rows }))
            }
        })
    } catch (error) {
        errorHandler(error, req, res);
    }
}
const selectState = (req, res, id) => {
    try {
        const query = 'SELECT cities.name FROM state INNER JOIN  cities ON state.id = cities.state_id WHERE state.id=$1';
        const VALUES = [id]
        pool.query(query, VALUES, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully cities Finded!!", data: data.rows }))
            }
        })
    } catch (error) {
        errorHandler(error, req, res);
    }
}
const selectcity = (req, res, id) => {
    try {
        const query = 'SELECT state.state FROM cities INNER JOIN  state ON  cities.state_id = state.id WHERE cities.id=$1';
        const VALUES = [id];
        pool.query(query, VALUES, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully cities to state Finded!!", data: data.rows }))
            }
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
}
const notFound = (req, res) => {
    res.end(JSON.stringify({ staus_code: 404, message: "Somthing went Wrong page not found Please check" }))
}

module.exports = { insertcities, getCities, deletecities, updateCities, selectState, selectcity, notFound }