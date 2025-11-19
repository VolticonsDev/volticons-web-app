import React from 'react';
import { Link } from 'react-router-dom';
import ShopItemCard from './ShopitemCard'; 
import { SHOP_ITEMS } from './data/dummy';

const ShopPreviewSection = () => {
    const previewItems = [...SHOP_ITEMS].reverse().slice(0, 2);

    return (
        <section id="shop-preview" className="py-20 px-5 text-center"> 
            <h2 className="section-title text-3xl font-extrabold mb-8 inline-block relative text-light" data-aos="fade-up"> 
                 Recien Llegados
            </h2>
            
            <p className="text-light mb-12 text-lg" data-aos="fade-up" data-aos-delay="100">
                {/* aca va lo que quieras*/}
            </p>
            
            <div className="flex justify-center gap-8 mb-12">
                {previewItems.map((item, index) => (

                    <div 
                        key={item.id}
                        data-aos="zoom-in" 
                        data-aos-delay={200 + index * 10} 
                    >
                        <ShopItemCard
                            name={item.name} 
                            price={item.price} 
                            imageUrl={item.imageUrl}
                            purchaseUrl={item.purchaseUrl}
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
        </section>
    );
};

export default ShopPreviewSection;