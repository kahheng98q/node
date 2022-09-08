import pool from "../config/dbconnector";

export class CommonHelper {
  public static async common(query: string) {
    const client = await pool.connect();

    const { rows } = await client.query(query);
    const item = rows;

    client.release();
    return item;
  }
}
