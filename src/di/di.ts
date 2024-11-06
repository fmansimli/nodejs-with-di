import { Container } from "inversify";
import { TYPES } from "./constants";

import { AppDataSource } from "../data-source";

import { IUserService } from "../_modules/users/users.types";
import { UsersService } from "../_modules/users/users.service";
import { UsersController } from "../_modules/users/users.controller";
import { User } from "../_modules/users/user.entity";

export const DI = new Container({ autoBindInjectable: true });

DI.bind<IUserService>(TYPES.UsersService).to(UsersService);
DI.bind(TYPES.UsersController).to(UsersController);
DI.bind(TYPES.UsersRepo).toConstantValue(AppDataSource.getRepository(User));
