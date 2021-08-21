import "reflect-metadata";
import { serverSetup } from "./serverSetup";
import "./database";

(() => {
  const server = new serverSetup();
  server.init();
  server.start();
})();
