import React from 'react';
import NewsCard from '../components/NewsCard';
import { DUMMY_NEWS } from '../components/data/dummy';
import Footer from '../components/Footer';

function NewsPage() {
    const allNewsReversed = [...DUMMY_NEWS].reverse();

    return (
        <div className="min-h-screen flex flex-col pt-20"> 
            <main className="flex-grow max-w-7xl mx-auto py-20 px-5 text-center">
                <h1 className="section-title text-4xl font-extrabold mb-16"> TODAS LAS NOTICIAS </h1> 

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {allNewsReversed.map((news, index) => (
                        <div 
                            key={news.id} 
                            data-aos="fade-up"
                            data-aos-delay={index * 200} 
                        >
                            <NewsCard news={news} />
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default NewsPage;