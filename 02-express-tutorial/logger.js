// Method that keep data will use mostly
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();     // Not writting this will cause the request will get "stuck"
    // res.send("Testing")
}

module.exports = logger;