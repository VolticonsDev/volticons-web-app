import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    return (
        <Link 
            to={`/noticias/${news.id}`} 
            className="bg-card-bg p-6 rounded-lg shadow-xl text-center 
                       transform hover:scale-105 transition-transform duration-300 overflow-hidden 
                       flex flex-col h-full" 
        >
            
            {news.imageUrl && (
                <div className="mb-4 overflow-hidden rounded-md h-32 w-full"> 
                    <img 
                        src={news.imageUrl} 
                        alt={news.title} 
                        className="w-full h-full object-cover" 
                    />
                </div>
            )}
            
            <div className="flex-grow"> 
                <h3 className="text-2xl font-bold mb-2 text-volt-violet">{news.title}</h3> 
                <p className="text-base mb-3 text-volt-violet leading-snug">
                    {news.summary}
                </p> 
            </div>

            <div className="mt-auto"> 
                <p className="text-xs text-volt-violet mb-4">{news.date}</p>
                <span className="text-volt-orange font-semibold hover:underline">
                    Leer Más
                </span>
            </div>
        </Link>
    );
};

export default NewsCard;