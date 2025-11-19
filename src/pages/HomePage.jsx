import React from 'react';
import Footer from '../components/Footer'; 
import NewsPreviewSection from '../components/NewsPreviewSection'; 
import ShopPreviewSection from '../components/ShopPreviewSection'; 


const HomePage = () => {
  return (
    <div className="home-page flex flex-col min-h-screen">
      <main className="flex-grow">
        <ShopPreviewSection /> 
        <NewsPreviewSection />
      </main>
      <Footer /> 
    </div>
  );
};

export default HomePage;