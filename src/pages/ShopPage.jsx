import React, { useState, useEffect } from 'react'; 
import Footer from '../components/Footer'; 
import ShopItemCard from '../components/ShopitemCard';


function ShopPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadProducts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/shop-products'); 
            
            if (!response.ok) { throw new Error('Fallo al obtener productos de la API.'); }
            const data = await response.json();
            if (data.success && data.products) {
                setProducts(data.products);
            }
        } catch (error) {
            console.error("Error al cargar productos:", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        loadProducts();
    }, []); 

    return (
        <div className="min-h-screen flex flex-col pt-20">
            <main className="flex-grow max-w-7xl mx-auto py-20 px-5 text-center"> 
                
                <h1 className="section-title text-4xl font-extrabold mb-24 inline-block relative border-volt-accent pb-2"
                    data-aos="fade-down"
                >
                    🛍️ TIENDA OFICIAL VOLTICONS
                </h1>


                {isLoading ? (
                    <p className="text-light text-xl mt-10">Cargando catálogo...</p>
                ) : products.length === 0 ? (
                    <p className="text-light text-xl mt-10">No hay productos disponibles.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto"> 
                        {products.map((product, index) => ( 
                            <div
                                key={product.id}
                                data-aos="fade-up" 
                                data-aos-delay={index * 100} 
                            >
                                <ShopItemCard 
                                    name={product.name} 
                                    price={`$U ${parseFloat(product.basePrice).toFixed(2)}`} 
                                    imageUrl={product.imageurl} 
                                    purchaseUrl={product.purchaseurl} 
                                    stock={product.stock}
                                />
                            </div>
                        ))}
                    </div>
                )}

            </main>
            <Footer />
        </div>
    );
}

export default ShopPage;