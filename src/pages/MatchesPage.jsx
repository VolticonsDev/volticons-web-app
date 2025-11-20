import React, { useState, useMemo } from 'react';
import { MOCK_MATCHES } from '../components/data/matches';
import MatchCard from '../components/MatchCard';
import TeamFilter from '../components/TeamFilter';
import useCountdown from '../hooks/useCountdown';
import Footer from '../components/Footer';

const findNearestMatch = () => {
  const now = new Date();
  return MOCK_MATCHES
    .filter(match => new Date(match.date) > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];
};

const nearestMatch = findNearestMatch();


const MatchesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const countdownTime = useCountdown(nearestMatch ? nearestMatch.date : new Date());

  const allCategories = useMemo(() => {
    const categories = MOCK_MATCHES.map(match => match.category);
    return [...new Set(categories)].sort();
  }, []);

  const filteredMatches = useMemo(() => {
    let matches = MOCK_MATCHES;
    
    if (selectedCategory !== 'All') {
      matches = MOCK_MATCHES.filter(match => match.category === selectedCategory);
    }
    
    if (nearestMatch && selectedCategory === 'All') {
        matches = matches.filter(match => match.id !== nearestMatch.id);
    }
    
    return matches.sort((a, b) => new Date(a.date) - new Date(b.date));

  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <main className="flex-grow p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
        
          <h1 className="section-title text-4xl font-extrabold mb-2" data-aos="fade-down">
            CALENDARIO DE EVENTOS
          </h1>
          <p className="text-gray-400 mb-8 text-lg" data-aos="fade-down" data-aos-delay="100">
              No te pierdas el próximo evento de nuestros equipos.
          </p>

          {/* Cuenta Regresiva */}
          {nearestMatch && (
            <div className="bg-header-bg p-6 rounded-xl shadow-2xl mb-12 border-4 border-volt-orange" data-aos="zoom-in">
              <h2 className="text-3xl font-bold text-center text-volt-orange mb-4">
                ¡Próximo Gran Evento!
              </h2>
              <MatchCard match={nearestMatch} showCountdown={true} countdownTime={countdownTime} />
            </div>
          )}
          
          <TeamFilter
            categories={allCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <h2 className="text-4xl font-bold text-light mb-6 mt-10 text-center">Partidos {selectedCategory === 'All' ? 'Próximos' : `de ${selectedCategory}`}</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
              ))
            ) : (
              <div className="md:col-span-3 text-center text-2xl text-gray-500 py-10">
                No hay partidos próximos para la categoría seleccionada.
              </div>
            )}
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MatchesPage;