import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch, FaYoutube, FaTiktok } from 'react-icons/fa';

import SponsorA from '../assets/sponsors/Sponsor1.png';
import SponsorB from '../assets/sponsors/Sponsor2.png';
import SponsorC from '../assets/sponsors/Sponsor3.png';


const Footer = () => {
    
    const hasSponsors = false;  //poner a false si no hay patrocinadores o a true si hay


    const sponsors = [
        { name: 'Sponsor A', logo: SponsorA, link: 'https://sponsorA.com' },
        { name: 'Sponsor B', logo: SponsorB, link: 'https://sponsorB.com' },
        { name: 'Sponsor C', logo: SponsorC, link: 'https://sponsorC.com' },
    ];

    return (
        <footer className="bg-header-bg text-light py-8 px-5 text-center border-t border-gray-700"> 
            <div className="max-w-6xl mx-auto flex flex-col">

                {hasSponsors && (
                    <div className="mb-8 pb-4 border-b border-gray-700 w-full">
                        <h4 className="text-xl font-bold mb-4 text-volt-orange">NUESTROS PATROCINADORES</h4>
                        <div className="flex justify-center items-center space-x-10 opacity-75">
                            {sponsors.map((sponsor, index) => (
                                <a 
                                    key={index} 
                                    href={sponsor.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="h-10 transition-opacity hover:opacity-100"
                                >
                                    <img 
                                        src={sponsor.logo} 
                                        alt={sponsor.name} 
                                        className="h-full w-auto object-contain"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                )}
           
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full">
                    
                    {/* Legal/Marca */}
                    <div className="mb-6 md:mb-0 md:w-1/3 text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2 text-volt-orange">VOLTICONS ESPORTS</h4>
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="mb-6 md:mb-0 md:w-1/3">
                        <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
                        <div className="flex justify-center md:justify-center space-x-6">
                            <a href="https://facebook.com/volticons" target="_blank" rel="noopener noreferrer" 
                               className="text-light hover:text-volt-violet transition-colors text-2xl"><FaFacebook /></a>
                            <a href="https://twitter.com/volticons" target="_blank" rel="noopener noreferrer" 
                               className="text-light hover:text-volt-violet transition-colors text-2xl"><FaTwitter /></a>
                            <a href="https://instagram.com/volticonsUY" target="_blank" rel="noopener noreferrer" 
                               className="text-light hover:text-volt-violet transition-colors text-2xl"><FaInstagram /></a>
                            <a href="https://twitch.tv/volticons" target="_blank" rel="noopener noreferrer" 
                               className="text-light hover:text-volt-violet transition-colors text-2xl"><FaTwitch /></a>
                            <a href="https://youtube.com/volticons" target="_blank" rel="noopener noreferrer" 
                               className="text-light hover:text-volt-violet transition-colors text-2xl"><FaYoutube /></a>
                               <a href="https://youtube.com/volticons" target="_blank" rel="noopener noreferrer" 
                               className="text-light hover:text-volt-violet transition-colors text-2xl"><FaTiktok /></a>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="md:w-1/3 text-center md:text-right">
                        <h4 className="text-lg font-semibold mb-3">Contacto</h4>
                        <p className="text-sm text-gray-400">info@volticons.com</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;