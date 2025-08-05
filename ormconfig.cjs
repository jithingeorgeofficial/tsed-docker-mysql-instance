const { DataSource } = require("typeorm");
require("dotenv").config();

module.exports = new DataSource({
  type: "mysql",
  host: "mysql",
  port: 3306,
  username: "root",
  password: "password",
  database: "tsed_db",
  synchronize: false,
  logging: true,
  entities: ["dist/entities/**/*.js"],
  migrations: ["dist/migrations/**/*.js"],
  subscribers: ["dist/subscribers/**/*.js"],
}); 