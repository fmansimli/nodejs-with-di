import { injectable } from "inversify";
import { User } from "./user";
import type { IUserService } from "./users.types";

@injectable()
export class UsersService implements IUserService {
  getAll(): Promise<User[]> {
    return Promise.resolve([{ name: "Farid", id: 1, email: "fm@gmail.com" }]);
  }
  getOne(id: number): Promise<User> {
    return Promise.resolve({
      id,
      name: "Farid",
      email: "fm@gmail.com"
    });
  }
}
