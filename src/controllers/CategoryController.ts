import { Request, Response } from "express";
import { AppError } from "@src/errors/AppError";
import { CategoryService } from "@services/CategoryService";

class CategoryController {
  async create(req: Request, res: Response): Promise<void> {
    const categoryService = new CategoryService();
    const { name } = req.body;

    if (!name) {
      throw new AppError("O campo categoria esta vazio");
    }

    const category = await categoryService.create(name.toUpperCase());

    res.status(200).json(category);
  }
}

export { CategoryController };
