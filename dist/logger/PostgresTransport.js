import console from "console";
import Transport from "winston-transport";
export default class PostgresTransport extends Transport {
    className = this.constructor.name;
    pool;
    tableName;
    constructor(pool, opts) {
        super(opts);
        this.pool = pool;
        this.tableName = opts.tableName;
        this.log = this.log.bind(this);
    }
    async log(info, callback) {
        const sql = `INSERT INTO ${this.tableName} (timestamp, level, message, meta) VALUES ($1,$2,$3,$4);`;
        let client;
        // console.log("sudd");
        try {
            client = await this.pool.connect();
            await client.query(sql, [
                info.timestamp,
                info.level,
                info.message,
                info.meta,
            ]);
            callback();
        }
        catch (error) {
            // tslint:disable-next-line: no-console
            console.log(`${this.className}.log(${JSON.stringify(info)}): Falure to Log: ${error.message}`);
        }
        finally {
            if (client) {
                client.release();
            }
        }
    }
}
