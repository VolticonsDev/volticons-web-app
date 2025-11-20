import React, { useState, useEffect, useMemo } from 'react';
import Footer from '../components/Footer'; 
import ShopItemCard from '../components/ShopitemCard';
import SidebarFilter from '../components/SidebarFilter'; 

function ShopPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({ category: 'All', sort: 'default' });

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };
    
    const loadProducts = async () => {
        setIsLoading(true);
        try {
            const queryParams = new URLSearchParams(filters).toString();
            const response = await fetch(`/api/shop-products?${queryParams}`);
            
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
    }, [filters]); 


    const allCategories = useMemo(() => {
        const categories = products.map(p => p.category).filter(Boolean);
        return ['All', ...new Set(categories)];
    }, [products]);
    

    return (
        <div className="min-h-screen flex flex-col pt-20">
            <main className="flex-grow max-w-7xl mx-auto py-20 px-5">
                
                <h1 className="section-title text-4xl font-extrabold mb-12 text-center"
                    data-aos="fade-down"
                >
                   TIENDA 
                </h1>
                
                <div className="flex">
                    
                    {!isLoading && products.length > 0 && (
                        <div className="w-1/4 pr-8 hidden md:block">
                            <SidebarFilter 
                                categories={allCategories}
                                filters={filters} 
                                onFilterChange={handleFilterChange} 
                            />
                        </div>
                    )}

                    <div className="w-full md:w-3/4 text-center">

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
                                            price={`$U ${product.basePrice.toFixed(2)}`} 
                                            imageUrl={product.imageUrl} 
                                            purchaseUrl={product.purchaseUrl} 
                                            stock={product.stock}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}

export default ShopPage;