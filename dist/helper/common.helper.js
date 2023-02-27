import pool from "../config/dbconnector";
export class CommonHelper {
    static async common(query) {
        const client = await pool.connect();
        const { rows } = await client.query(query);
        const item = rows;
        client.release();
        return item;
    }
}
