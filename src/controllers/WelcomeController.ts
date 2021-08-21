import { Request, Response } from "express";

class WelcomeController {
  async handle(req: Request, res: Response) : Promise<Response>{
    return res.send("Olá Bem vindo a nossa API");
  }
}

export {WelcomeController}