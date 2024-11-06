import type { Repository } from "typeorm";
import { inject, injectable } from "inversify";
import { TYPES } from "../../di/constants";

import type { IUserService } from "./users.types";
import { User } from "./user.entity";

import { NotFoundError } from "../../errors";

@injectable()
export class UsersService implements IUserService {
  constructor(@inject(TYPES.UsersRepo) private readonly userRepo: Repository<User>) {}

  async createUser(userAttrs: Partial<User>) {
    const user = new User(userAttrs);
    await this.userRepo.save(user);
    return user;
  }

  async getAll(): Promise<User[]> {
    const users = await this.userRepo.find();
    return users;
  }

  async getOne(id: number): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundError("User not found");
    }
    return user;
  }
}
