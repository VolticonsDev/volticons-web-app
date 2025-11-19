import React from 'react';
import TeamsSection from '../components/TeamsSection'; 
import Footer from '../components/Footer';

function PokemonPage() {
    return (
        <div className="min-h-screen flex flex-col pt-20"> 
            <main className="flex-grow" data-aos="fade-up"> 
                <TeamsSection teamKey="Pokemon" teamTitle="Pokémon" /> 
            </main>
            <Footer />
        </div>
    );
}

export default PokemonPage;