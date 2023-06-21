const http = require('http');
require('dotenv').config();
const db = require('./config/postgresql');
const router = require('./routes/router');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const errorHandler = require('./Utils/errorHandler');

const server = http.createServer((req, res) => {
    urlencodedParser(req, res, () => {
        try {
            router(req, res)
        } catch (error) {
            errorHandler(error, req, res);
        }
    })
});

server.listen(port, (error) => {
    if (error) {
        console.log('server in error');
    }
    console.log('server listening on port : ' + port);
})
