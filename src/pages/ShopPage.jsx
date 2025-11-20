import React, { useState, useEffect, useMemo } from 'react';
import Footer from '../components/Footer'; 
import ShopItemCard from '../components/ShopitemCard';
import TeamFilter from '../components/TeamFilter';

function ShopPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedcategory] = useState ('All')

    const loadProducts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/shop-products');
            
            if (!response.ok) {
                throw new Error('Fallo al obtener productos de la API.');
            }
            
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

    
    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') {
            return products;
        }
           return products.filter(p => p.category === selectedCategory);
    }, [products, selectedCategory]);

    return (
        <div className="min-h-screen flex flex-col pt-20">
            <main className="flex-grow max-w-7xl mx-auto py-20 px-5 text-center">
                
                <h1 className="section-title text-4xl font-extrabold mb-24 inline-block relative border-volt-accent pb-2"
                    data-aos="fade-down"
                >
                   TIENDA
                </h1>

                {isLoading ? (
                    <p className="text-light text-xl mt-10">Cargando catálogo...</p>
                ) : filteredProducts.length === 0 ? (
                    <p className="text-light text-xl mt-10">La tienda está vacía. asegurate de haber agregado los items a la database neon </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                data-aos="fade-up" 
                                data-aos-delay={index * 100} 
                            >
                                <ShopItemCard 
                                    name={product.name} 
                                    price={`$${product.basePrice.toFixed(2)}`} 
                                    imageUrl={product.imageUrl}     
                                    purchaseUrl={product.purchaseUrl} 
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