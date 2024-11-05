import type { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../../di/constants";

import { BadRequestError } from "../../errors";
import type { IUserService } from "./users.types";

@injectable()
export class UsersController {
  constructor(@inject(TYPES.UsersService) private readonly usersService: IUserService) {}

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.usersService.getAll();

      res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.usersService.getOne(parseInt(req.params.id));

      if (user.id === 123) {
        throw new BadRequestError("id is invalid");
      }

      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }
}
