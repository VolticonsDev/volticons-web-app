import React from 'react';
import NewsCard from './NewsCard';
import { DUMMY_NEWS } from './data/dummy';
import { Link } from 'react-router-dom';

const NewsPreviewSection = () => {
    const previewNews = [...DUMMY_NEWS].reverse().slice(0, 3);
    
    return (
        <section id="noticias-preview" className="py-20 px-5 text-center pt-32"> 
            
            <h2 className="section-title text-3xl font-extrabold mb-8" data-aos="fade-down">
                 ÚLTIMAS NOTICIAS
            </h2> 
            
            <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-7xl mx-auto">
                {previewNews.map((news, index) => (
                    <div 
                        key={news.id} 
                        data-aos="zoom-in" 
                        data-aos-delay={index * 150} 
                    >
                        <NewsCard news={news} />
                    </div>
                ))}
            </div>
            
            <Link to="/noticias">
                <button 
                    className="bg-volt-orange text-light font-bold py-3 px-10 rounded-full hover:opacity-90 transition-opacity text-lg"
                    data-aos="fade-up" 
                    data-aos-delay={previewNews.length * 150}
                > 
                    VER TODAS LAS NOTICIAS
                </button>
            </Link>
        </section>
    );
};

export default NewsPreviewSection;