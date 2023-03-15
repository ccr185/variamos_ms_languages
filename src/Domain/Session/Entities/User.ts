import Sequelize from "sequelize";
import sequelize from "../../../DataProviders/dataBase/VariamosORM";

export class User {
  id: string;
  user: string;
  pwd: string;
  name: string;
  email: string;

  constructor(
    id: string,
    user: string,
    pwd: string,
    name: string,
    email: string,
  ) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.pwd = pwd;
    this.email = email; 
  }
 
}

export const OrmUser = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.TEXT, 
      primaryKey: true 
    },
    user: { type: Sequelize.TEXT },
    pwd: { type: Sequelize.TEXT },
    name: { type: Sequelize.TEXT },
    email: { type: Sequelize.TEXT } 
  },
  {
    freezeTableName: true,
    schema: "variamos",
    timestamps: false,
  }
);

export const UserSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    user: { type: "string" },
    pwd: { type: "string" },
    name: { type: "string" },
    email: { type: "string" } 
  },
  required: ["id", "user", "pwd", "name", "email"],
  additionalProperties: false,
};
