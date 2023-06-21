const path = require('path');
const url = require('url');
const querystring = require('querystring');
const routesss = require('../Utils/routesJson');
const errorHandler = require('../Utils/errorHandler')

const router = (req, res) => {
    const parseurl = url.parse(req.url)
    const query = querystring.parse(parseurl.query);
    const routeHandler = routesss[parseurl.pathname];
    const handler = routeHandler[req.method];
    const [id] = Object.keys(query);
    if (handler) {
        handler(req, res, id)
    } else {
        errorHandler(error, req, res,)
    }
}
module.exports = router;