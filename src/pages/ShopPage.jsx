import React, { useState, useEffect, useMemo } from 'react';
import Footer from '../components/Footer'; 
import ShopItemCard from '../components/ShopitemCard';
import TeamFilter from '../components/TeamFilter'; // ⬅️ Este componente es el que queremos usar

function ShopPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // 🚨 CORRECCIÓN: Usar camelCase estándar para el estado
    const [selectedCategory, setSelectedCategory] = useState('All'); 

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


    // 🟢 1. MEMO para obtener TODAS las categorías únicas (para los botones)
    const allCategories = useMemo(() => {
        // Mapea y usa Set para obtener solo categorías únicas
        const categories = products.map(p => p.category).filter(Boolean); // Filtra los nulos/undefined
        return ['All', ...new Set(categories)];
    }, [products]);


    // 🟢 2. MEMO para filtrar la lista de productos
    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') {
            return products;
        }
        // Retorna solo los productos cuya categoría coincide con la seleccionada
        return products.filter(p => p.category === selectedCategory);
    }, [products, selectedCategory]);


    return (
        <div className="min-h-screen flex flex-col pt-20">
            <main className="flex-grow max-w-7xl mx-auto py-20 px-5 text-center">
                
                <h1 className="section-title text-4xl font-extrabold mb-12 inline-block relative border-volt-accent pb-2"
                    data-aos="fade-down"
                >
                    🛍️ TIENDA OFICIAL VOLTICONS
                </h1>

                {/* 🚨 COMPONENTE DE FILTRO (Visible si hay productos) */}
                {!isLoading && products.length > 0 && (
                    <div className="mb-12">
                        <TeamFilter 
                            categories={allCategories} // ⬅️ Usamos el memo de categorías
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory} // Función para cambiar el estado
                        />
                    </div>
                )}


                {isLoading ? (
                    <p className="text-light text-xl mt-10">Cargando catálogo...</p>
                ) : filteredProducts.length === 0 ? ( 
                    <p className="text-light text-xl mt-10">No hay productos en esta categoría.</p>
                ) : (
                    // 🚨 GRID DE PRODUCTOS (Usa la lista filtrada)
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => ( 
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

            </main>
            <Footer />
        </div>
    );
}

export default ShopPage;