const stateController = require('../Controller/controller')
const citiesContoller = require('../Controller/citiesContoller')
const routes = {
    '/state/': {
        POST: stateController.insertState,
        DELETE: stateController.deleteState,
        PUT: stateController.updateState,
        GET: stateController.getState
    },
    '/cities/': {
        GET: citiesContoller.getCities,
        DELETE: citiesContoller.deletecities,
        POST: citiesContoller.insertcities,
        PUT: citiesContoller.updateCities
    },
    '/state/select/': {
        GET: citiesContoller.selectState
    },

    '/cities/select/': {
        GET: citiesContoller.selectcity
    }
}
module.exports = routes;