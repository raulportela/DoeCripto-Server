import express from "express";
import { router } from "@src/routes";
import cors from "cors";
import dotenv from "dotenv";

export class serverSetup {
  private app = express();
  constructor(private port = 3000) {}

  private setupExpress(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(router);
  }

  public init(): void {
    this.setupExpress();
  }

  public start(): void {
    if (process.env.NODE !== "production") {
      dotenv.config();
      this.app.listen(this.port, () => {
        console.log("Server listening port:" + this.port || process.env.PORT);
      });
    }
  }
}
