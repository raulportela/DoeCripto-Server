import { getCustomRepository } from "typeorm";
import { User } from "@entities/User";
import { UsersRepositories } from "@src/repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class UserService {
  async create({
    name,
    email,
    admin = false,
    password,
  }: IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const passwordHash = await hash(password, 8);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { UserService };
