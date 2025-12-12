const authorize = (req, res, next) => {
    const {user} = req.query;

    if (user === "waleed") {
        // See in console, have access of this user in any route
        req.user = {name: "waleed", id: 4}
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
    // console.log("Authorized");
    // next()
}

module.exports = authorize;



/*
const authorize = (req, res, next) => {
    console.log("Authorized");
    next()
}

module.exports = authorize;
*/