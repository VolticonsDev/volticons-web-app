import React from 'react';
import TeamsSection from '../components/TeamsSection';
import Footer from '../components/Footer'; 

function TeamsPage() {
  return (

    <div className="min-h-screen flex flex-col pt-20"> 
      <main className="flex-grow" data-aos="fade-up" data-aos-delay="200">
        <TeamsSection />
      </main>
      <Footer /> 
    </div>
  );
}

export default TeamsPage;