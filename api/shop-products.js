// api/shop-products.js
import { query as dbQuery } from './db-connect.js';

export default async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    }

    try {
        // Ejecutamos la consulta.
        const result = await dbQuery('SELECT id, name, baseprice, imageurl, purchaseurl, stock FROM shop_products ORDER BY id ASC'); 
        
        // 🚨 PUNTO DE CONTROL: Verificamos el número de filas recibidas.
        const productCount = result.rows ? result.rows.length : 0;
        
        // Mapeamos los resultados (esto convierte los tipos de DB a JS)
        const products = result.rows.map(product => ({
            id: product.id,
            name: product.name,
            // Las propiedades ahora vienen del SQL:
            basePrice: product.baseprice,  
            imageUrl: product.imageurl,    
            purchaseUrl: product.purchaseurl,
            stock: product.stock 
        }));
        
        // 🚨 DEVOLVEMOS UN MENSAJE DETALLADO DE DEBUG
        res.status(200).json({ 
            success: true, 
            products: products,
            debug: {
                message: `Consulta exitosa. Filas encontradas: ${productCount}.`,
                example_product: products[0] || 'Ninguno'
            }
        });
        
    } catch (error) {
        console.error('Error al obtener productos de la tienda:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Fallo la consulta a la Base de Datos.', 
            details: error.message,
            sql_state: error.code // Código de error de PostgreSQL
        });
    }
}