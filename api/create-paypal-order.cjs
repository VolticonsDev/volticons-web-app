/* PAGOS CON PAYPAL DESACTIVADOS TEMPORALMENTE
    
    PARA ACTIVAR LA TIENDA:
    1. En Vercel: Ve a 'Environment Variables' y cambia VITE_MERCH_ACTIVE a 'true'.
    2. En este archivo: Elimina este gran comentario de bloque   que envuelve el cuerpo de la función principal.
    3. En ShopItemCard.jsx: Descomenta el bloque de la función 'handleCheckout'.
*/

const paypal = require('@paypal/paypal-server-sdk');

// NOTA: Para producción (LIVE), debes cambiar 'SandboxEnvironment' por 'LiveEnvironment'
const environment = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

const YOUR_DOMAIN = 'https://volticons-web-app.vercel.app'; 

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).end();
    }
    
    //  INTERRUPTOR DE ACTIVACIÓN: Si es false, devolvemos un 403.
    if (process.env.VITE_MERCH_ACTIVE !== 'true') {
        return res.status(403).json({ 
            error: 'La tienda aún no está activa para pagos. Vuelve en Enero/Febrero.' 
        });
    }

    try {
        const { purchase_units } = req.body; 

        if (!purchase_units || purchase_units.length === 0) {
            return res.status(400).json({ error: 'No se encontraron items de compra.' });
        }
        
        let request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: purchase_units, 
            application_context: {
                return_url: `${YOUR_DOMAIN}/shop?status=success`,
                cancel_url: `${YOUR_DOMAIN}/shop?status=canceled`,
            }
        });

        const response = await client.execute(request);
        
        const approvalLink = response.result.links.find(link => link.rel === 'approve').href;

        res.status(200).json({ url: approvalLink });
    } catch (error) {
        console.error('PayPal Order Creation Error:', error);
        res.status(500).json({ error: 'Fallo al crear la orden de PayPal.' });
    }
};