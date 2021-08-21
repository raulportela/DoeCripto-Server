import { Institution } from "@src/entities/Institution";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Institution)
class InstitutionRepository extends Repository<Institution> {}

export { InstitutionRepository };
