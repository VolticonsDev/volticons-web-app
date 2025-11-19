import { query as dbQuery } from './db-connect.js'; 

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS "shop_products" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        base_price NUMERIC(10, 2) NOT NULL,
        image_url VARCHAR(255),
        purchase_url VARCHAR(255)
    );
`;

export default async function (req, res) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    try {
        await dbQuery(createTableQuery);
        
        res.status(200).json({ success: true, message: 'Tabla shop_products creada o verificada exitosamente.' });
    } catch (error) {
        console.error('Database setup failed:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};