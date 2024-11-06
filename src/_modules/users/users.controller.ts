import type { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../../di/constants";

import type { IUserService } from "./users.types";
import { BadRequestError } from "../../errors";

@injectable()
export class UsersController {
  constructor(@inject(TYPES.UsersService) private readonly usersService: IUserService) {}

  async createUser(req: Request, res: Response, next: NextFunction) {
    const userAttrs = req.body;

    const data = await this.usersService.createUser(userAttrs);
    res.status(201).json(data);
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    const users = await this.usersService.getAll();
    res.status(200).json(users);
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    const user = await this.usersService.getOne(parseInt(req.params.id));

    if (user.id === 123) {
      throw new BadRequestError("id is invalid");
    }

    res.status(200).json(user);
  }
}
