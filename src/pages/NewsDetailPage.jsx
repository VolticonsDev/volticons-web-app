import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DUMMY_NEWS } from '../components/data/dummy';
import Footer from '../components/Footer';

function NewsDetailPage() {
  const { id } = useParams();
  
  const newsItem = DUMMY_NEWS.find(item => item.id.toString() === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-dark-bg text-light flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-4">Noticia no encontrada</h1>
        <Link to="/noticias" className="text-volt-accent hover:underline">Volver a Noticias</Link>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg text-light flex flex-col">
      <main className="flex-grow max-w-4xl mx-auto py-20 px-5">
        
        <Link 
            to="/noticias" 
            className="mb-8 inline-block bg-volt-violet text-light py-2 px-5 rounded-full hover:bg-volt-orange transition-colors"
        >
            ← Volver a Noticias
        </Link>

        <h1 className="text-4xl font-extrabold mb-4 text-volt-accent">{newsItem.title}</h1>
        <p className="text-lg text-gray-400 mb-8">{newsItem.date}</p>
        
        <div className="mb-8 max-w-4xl mx-auto w-full"> 
            {newsItem.videoUrl ? (
                <div className="relative overflow-hidden rounded-lg w-full" style={{ paddingTop: '56.25%' }}> 
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={newsItem.videoUrl}
                        title={newsItem.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : newsItem.imageUrl ? (
                <div className="overflow-hidden rounded-lg w-full h-96 mx-auto"> 
                    <img 
                        src={newsItem.imageUrl} 
                        alt={newsItem.title} 
                        className="w-full h-full object-cover" 
                    />
                </div>
            ) : null}
        </div>
        
        <p className="text-gray-200 whitespace-pre-wrap text-lg leading-relaxed">{newsItem.fullContent}</p>

      </main>
      <Footer />
    </div>
  );
}

export default NewsDetailPage;