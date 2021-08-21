import { Category } from "@src/entities/Category";
import { AppError } from "@src/errors/AppError";
import { CategoryRepository } from "@src/repositories/CategoryRepository";
import { InstitutionService } from "@src/services/InstitutionService";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

class InstitutionController {
  async create(req: Request, res: Response): Promise<any> {
    const institutionService = new InstitutionService();

    const { name, cnpj, site, category, wallet } = req.body;

    const institution = {
      name,
      cnpj,
      site,
      wallet,
      category: category.toUpperCase(),
    };

    try {
      const institutionSaved = await institutionService.create(institution);
      res.status(200).json(institutionSaved);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}

export { InstitutionController };
