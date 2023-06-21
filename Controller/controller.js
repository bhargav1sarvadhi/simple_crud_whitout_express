const bodyParser = require('body-parser');
const pool = require('../config/postgresql');
const errorHandler = require('../Utils/errorHandler');

const insertState = (req, res, next) => {
    try {
        const { state } = req.body;
        const query = 'INSERT INTO state (state) VALUES ($1) RETURNING * '
        const VALUE = [state];
        pool.query(query, VALUES, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully State Created!!", data: data.rows }))
            }
        })
    } catch (error) {
        errorHandler(error, req, res);
    }
}

const getState = (req, res) => {
    try {
        const query = 'SELECT state,cities.name FROM state INNER JOIN  cities ON state.id = cities.state_id';
        pool.query(query, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully State Finded!!", data: data.rows }))
            }
        })
    } catch (error) {
        errorHandler(error, req, res);
    }
}

const deleteState = (req, res, id) => {
    try {
        const query = `
        WITH deleted_cities AS (
            DELETE FROM cities WHERE state_id = $1
        )
        DELETE FROM state WHERE id = $1 RETURNING *
    `;
        const VALUES = [id]
        pool.query(query, VALUES, (error, data) => {
            if (error || data.rowCount === 0) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully State DELETED!!", data: data.rows }))
            }
        })

    } catch (error) {
        errorHandler(error, req, res);
    }
}

const updateState = (req, res, id) => {
    try {
        const { state } = req.body
        const query = 'UPDATE state SET state = $1 WHERE id = $2 RETURNING state'
        const VALUES = [state, id];
        pool.query(query, VALUES, (error, data) => {
            if (error || data.rowCount === 0) {
                errorHandler(error, req, res);
            } else {
                res.end(JSON.stringify({ staus_code: 200, message: "Successfully State UPDATED!!", data: data.rows }))
            }
        })
    } catch (error) {
        errorHandler(error, req, res);
    }
}

module.exports = { insertState, getState, deleteState, updateState };