import type { DataSourceOptions } from "typeorm";
import "dotenv/config";

const dbConfig: Partial<DataSourceOptions> = {
  entityPrefix: "",
  entitySkipConstructor: true,
  migrationsTableName: "app_migrations",
  metadataTableName: "typeorm-metas",
  migrationsRun: false,
  maxQueryExecutionTime: 5000,
  dropSchema: false
};

switch (process.env.NODE_ENV) {
  case "production":
    Object.assign(dbConfig, {
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "",
      database: "mydb",
      entities: ["**/*.entity.js"],
      logging: false,
      migrations: ["./src/migrations/*.js"]
    } as DataSourceOptions);
    break;

  case "development":
    Object.assign(dbConfig, {
      type: "sqlite",
      database: "mydb.sqlite",
      entities: ["**/*.entity.ts"],
      logging: ["query", "migration", "error"],
      synchronize: false,
      dropSchema: false,
      migrations: ["./src/migrations/*.ts"]
    } as DataSourceOptions);
    break;

  case "testing":
    Object.assign(dbConfig, {
      type: "sqlite",
      database: "test.sqlite",
      entities: ["**/*.entity.ts"],
      logging: false,
      migrations: ["./src/migrations/*.ts"],
      migrationsRun: true
    } as DataSourceOptions);
    break;

  default:
    throw new Error("Unknown Env type.");
}

export default dbConfig as DataSourceOptions;
