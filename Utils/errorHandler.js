const errorHandler = (error, req, res, next) => {
  if (error) {
    const statusCode = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.end(JSON.stringify({ status_code: statusCode, message: message }));
  } else {
    res.end(JSON.stringify({ staus_code: 500, message: "Somthing went Wrong please check" }))
  }
};

module.exports = errorHandler;