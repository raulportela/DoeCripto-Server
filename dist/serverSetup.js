"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var serverSetup = /** @class */ (function () {
    function serverSetup(port) {
        if (port === void 0) { port = 3001; }
        this.port = port;
        this.app = express_1.default();
    }
    serverSetup.prototype.setupExpress = function () {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(routes_1.router);
    };
    serverSetup.prototype.init = function () {
        this.setupExpress();
    };
    serverSetup.prototype.start = function () {
        var _this = this;
        if (process.env.NODE !== "production") {
            dotenv_1.default.config();
            this.app.listen(this.port, function () {
                console.log("Server listening port:" + _this.port || process.env.PORT);
            });
        }
    };
    return serverSetup;
}());
exports.serverSetup = serverSetup;
