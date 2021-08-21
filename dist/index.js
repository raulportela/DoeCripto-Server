"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var serverSetup_1 = require("./serverSetup.js");
require("./database");
(function () {
    var server = new serverSetup_1.serverSetup();
    server.init();
    server.start();
})();
