import { Pool } from "pg";

export default new Pool({
  max: 20,
  connectionString: "postgres://user:user@localhost:5432/demodb",
  idleTimeoutMillis: 30000,
});
