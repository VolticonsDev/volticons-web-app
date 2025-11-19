import React from 'react';

const IS_MERCH_ACTIVE = import.meta.env.VITE_MERCH_ACTIVE === 'true';

const ShopItemCard = ({ name, price, imageUrl, purchaseUrl, basePrice, stock }) => { 
    
    const currentStock = parseInt(stock) || 0; 
    const isAvailable = currentStock > 0; 
    
    const handleCheckout = async () => {
        
        if (!IS_MERCH_ACTIVE) {
            alert(`La tienda abre pronto! Vuelve a visitarnos en la fecha de lanzamiento.`);
            return;
        }

        if (!isAvailable) {
            alert(`¡Lo sentimos! ${name} está agotado.`);
            return;
        }

        try {
            const numericPrice = parseFloat(basePrice); 
            
            const response = await fetch('/api/create-paypal-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    purchase_units: [{
                        amount: { currency_code: 'USD', value: numericPrice.toFixed(2) },
                        items: [{ 
                            name: name, 
                            quantity: 1, 
                            unit_amount: { currency_code: 'USD', value: numericPrice.toFixed(2) } 
                        }]
                    }]
                })
            });
            
            const data = await response.json();

            if (response.ok && data.url) {
                window.location.href = data.url; 
            } else {
                alert(`Error: ${data.error || 'Fallo al iniciar el pago.'}`);
            }
        } catch (error) {
            console.error(error);
            alert('Fallo de conexión con el servidor de pagos.');
        }
    };

    return (
        <div 
            className="bg-card-bg p-4 rounded-xl shadow-2xl w-full max-w-xs mx-auto border-2 transition-all duration-300 transform hover:scale-[1.03] 
                       border-volt-violet/50 hover:border-volt-orange"
        >
            <div className="h-48 bg-gray-700/50 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            
            <h3 className="text-xl font-bold text-dark mb-1">{name}</h3>
            <p className="text-volt-orange font-extrabold text-2xl mb-4">{price}</p>
            
            {IS_MERCH_ACTIVE && (
                <p className={`text-sm font-semibold mb-2 ${isAvailable ? 'text-green-600' : 'text-red-500'}`}>
                    {isAvailable ? `Stock: ${currentStock} unidades` : '¡AGOTADO!'}
                </p>
            )}
            <button
                onClick={handleCheckout}
                className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-200 text-lg 
                            ${(IS_MERCH_ACTIVE && isAvailable)
                                ? 'bg-volt-orange hover:bg-volt-violet text-white shadow-md shadow-volt-orange/50 transform hover:scale-105'
                                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            }`}
                disabled={!IS_MERCH_ACTIVE || !isAvailable}
            >
                {!IS_MERCH_ACTIVE 
                    ? 'PRÓXIMAMENTE...'
                    : (isAvailable ? 'COMPRAR AHORA' : 'AGOTADO') 
                }
            </button>
        </div>
    );
};

export default ShopItemCard;