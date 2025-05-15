const userMiddleware = (req, res, next) => {
    console.log('terjadi api ke', req.path);
    next();
};

module.exports = [userMiddleware];