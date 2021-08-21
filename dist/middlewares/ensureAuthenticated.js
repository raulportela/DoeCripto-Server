"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(req, res, next) {
    var authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    console.log(authToken);
    var _a = authToken.split(" "), token = _a[1];
    try {
        var sub = jsonwebtoken_1.verify(token, "").sub;
        req.user_id = sub;
        return next();
    }
    catch (err) {
        res.status(401).end();
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
