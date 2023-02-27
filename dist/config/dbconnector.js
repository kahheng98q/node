import pg from "pg";
const { Pool } = pg;
export const dbconfig = {
    max: 20,
    connectionString: "postgres://user:user@localhost:5432/demodb",
    idleTimeoutMillis: 30000,
};
export default new Pool(dbconfig);
