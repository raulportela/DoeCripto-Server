import { EntityRepository, Repository } from "typeorm";
import { Donation } from "@src/entities/Donation";

@EntityRepository(Donation)
class DonationsRepository extends Repository<Donation> {}

export { DonationsRepository };
