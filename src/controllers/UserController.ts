import { UserService } from "@src/services/UserService";
import { Request, Response } from "express";

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, admin, password } = req.body;

    const userService = new UserService();

    const user = await userService.create({ name, email, admin, password });

    return res.json(user);
  }
}

export { UserController };
