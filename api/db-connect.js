import { Pool } from 'pg'; 
import { types } from 'pg'; 

types.setTypeParser(types.builtins.NUMERIC, (value) => {
    return parseFloat(value); 
});

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export const query = (text, params) => pool.query(text, params);