export interface Database {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  getQuery(sql: string): Promise<any[]>;
}
