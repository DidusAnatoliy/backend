const logger = (request, response, next) => {
    console.log(request.url);
    next();
  };
  module.exports = logger;