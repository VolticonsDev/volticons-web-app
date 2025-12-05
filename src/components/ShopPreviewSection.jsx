import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShopItemCard from './ShopitemCard';

const ShopPreviewSection = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch('/api/shop-products');
                const data = await response.json();
                
                if (data.success && data.products) {
                    setProducts(data.products);
                }
            } catch (error) {
                console.error("Error al cargar productos para preview:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadProducts();
    }, []);

    const previewItems = [...products].reverse().slice(0, 2);


    return (
        <section id="shop-preview" className="py-20 px-5 text-center text-light animate-fade-in-up"> 
            
            <h2 className="section-title text-3xl font-extrabold mb-8 inline-block relative text-light" data-aos="fade-up"> 
                ☕ ÚLTIMAS ADICIONES
            </h2>
            
            {isLoading ? (
                <p className="text-light text-xl mt-10">Cargando ofertas...</p>
            ) : previewItems.length === 0 ? (
                 <p className="text-light mb-12 text-lg">
                    No hay productos disponibles actualmente.
                </p>
            ) : (
                <>
                    <p className="text-light mb-12 text-lg">
                        ¡Descubre nuestra nueva línea de jerseys y accesorios exclusivos por tiempo limitado!
                    </p>
                    <div className="flex justify-center gap-8 mb-12">
                        {previewItems.map((item, index) => (
                            <div 
                                key={item.id}
                                data-aos="zoom-in"
                                data-aos-delay={200 + index * 100}
                            >
                                <ShopItemCard
                                    name={item.name} 
                                    price={`$U ${parseFloat(product.basePrice).toFixed(2)}`} 
                                    imageUrl={item.imageurl}
                                    purchaseUrl={item.purchaseurl}
                                    stock={item.stock}
                                />
                            </div>
                        ))}
                    </div>
                    
                    <Link to="/shop">
                        <button 
                            className="bg-volt-orange text-light font-bold py-3 px-10 rounded-full hover:opacity-90 transition-opacity text-lg"
                            data-aos="fade-up" 
                            data-aos-delay="400"
                        >
                            VER TIENDA COMPLETA
                        </button>
                    </Link>
                </>
            )}
        </section>
    );
};

export default ShopPreviewSection;