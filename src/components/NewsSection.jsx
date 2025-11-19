import React from 'react';
import NewsCard from './NewsCard';
import { DUMMY_NEWS } from './data/dummy';

const NewsSection = () => {
    return (
        <section id="noticias" className="py-20 px-5 text-center">
            <h2 className="section-title">NOTICIAS VOLTICONS</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                {DUMMY_NEWS.map(news => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </div>

        </section>
    );
};

export default NewsSection;