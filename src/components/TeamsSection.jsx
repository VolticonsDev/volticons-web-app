import React from 'react';
import { ROSTERS } from './data/dummy'; 
import { FaTwitch, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const PlayerCard = ({ player }) => (
    <div 
        className={`bg-card-bg p-5 rounded-lg shadow-xl w-56 text-center 
                    block border-2 border-volt-violet cursor-pointer relative
                    transform hover:scale-105 transition-transform duration-300`} 
    > 
        <div className="relative w-24 h-24 rounded-full mx-auto mb-4 border-4 border-volt-orange overflow-hidden flex items-center justify-center">
            {player.photoUrl ? (
                <img src={player.photoUrl} alt={`Foto de ${player.gamertag}`} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full bg-volt-orange text-dark text-3xl font-bold flex items-center justify-center">
                    {player.gamertag[0]}
                </div>
            )} 
        </div>

        <h3 className="text-2xl font-bold text-dark">{player.gamertag}</h3>
        <p className="text-volt-orange font-medium text-lg mb-2">{player.role}</p> 
        
        <div className="flex justify-center space-x-3 mt-3">
            {player.twitchLink && (
                <a href={player.twitchLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-volt-violet transition-colors text-lg"><FaTwitch /></a>
            )}
            {player.twitterLink && (
                <a href={player.twitterLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-volt-violet transition-colors text-lg"><FaTwitter /></a>
            )}
            {player.instagramLink && (
                <a href={player.instagramLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-volt-violet transition-colors text-lg"><FaInstagram /></a>
            )}
            {player.youtubeLink && (
                <a href={player.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-volt-violet transition-colors text-lg"><FaYoutube /></a>
            )}
        </div>
    </div>
);

const TeamsSection = ({ teamKey, teamTitle }) => {
    
    const currentRoster = ROSTERS[teamKey]; 
    if (!currentRoster) {
        return <section className="py-20 px-5 text-center "><h2 className="text-light">Equipo no encontrado.</h2></section>;
    }

    return (
        <section id="equipos" className="py-20 px-5 text-center ">            
            <h2 className="section-title text-3xl font-extrabold mb-4 inline-block relative border-volt-orange pb-2">
                 EQUIPO {teamTitle}
            </h2>           
            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto min-h-[300px] mt-16">
                {currentRoster.map((player, index) => (
                    <div 
                        key={player.id} 
                        data-aos="fade-up" 
                        data-aos-delay={index * 150} 
                    >
                        <PlayerCard player={player} />
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default TeamsSection;