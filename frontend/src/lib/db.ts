import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined in environment variables");
    }
    if (!pool) {
        try {
            pool = new Pool({
                connectionString: process.env.DATABASE_URL,
            });
        }
        catch (error) {
            console.error("Error creating database pool:", error);
            throw error;
        }
    }
    return pool;
}