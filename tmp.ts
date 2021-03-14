import { Query } from "./mod.ts";

const builder = new Query();
const records = 
  {
    name: "Enok",
    password: "foo",
    id: 1
  }
const sql = builder
  .table("users")
  .insert(records)
  .build();

console.log(sql)
