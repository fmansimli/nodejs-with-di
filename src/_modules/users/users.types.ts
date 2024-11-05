import type { User } from "./user";

export interface IUserService {
  getAll(): Promise<User[]>;
  getOne(id: number): Promise<User>;
}
