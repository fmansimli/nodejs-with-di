import type { User } from "./user.entity";

export interface IUserService {
  createUser(attrs: Partial<User>): Promise<User>;
  getAll(): Promise<User[]>;
  getOne(id: number): Promise<User>;
}
