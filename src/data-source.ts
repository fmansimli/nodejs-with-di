import { DataSource } from "typeorm";
import dbConfig from "../ormconfig";

export const AppDataSource = new DataSource(dbConfig);
