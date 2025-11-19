import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import VolticonsLogo from '../assets/Volticons_Purple.png';
import { FaTwitch, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);
    
    const getNavLinkClass = ({ isActive }) => 
        `text-lg font-semibold transition-colors duration-300 px-3 py-1 
         ${isActive ? 'text-volt-orange' : 'text-light hover:text-volt-orange'}`; 
       
    const isTeamsActive = location.pathname.startsWith('/equipos');
    const teamsLinkClass = `text-lg font-semibold transition-colors duration-300 px-3 py-1 cursor-pointer 
                            ${isTeamsActive ? 'text-volt-orange' : 'text-light hover:text-volt-orange'}`;

    const headerClass = `fixed w-full top-0 left-0 z-50 py-4 px-6 flex items-center transition-shadow duration-300 bg-header-bg 
                         ${scrolled ? 'shadow-xl' : 'opacity-90'}`; 

    const headerStyle = {
        backgroundImage: "url('/header_pattern.png')", 
        backgroundRepeat: 'repeat', 
        backgroundSize: 'auto', 
        backgroundBlendMode: 'overlay',
    };
    
    return (
        <header className={headerClass} style={headerStyle}> 
            <div className="flex items-center"> 
                <Link to="/">
                    <img src={VolticonsLogo} alt="Volticons Logo" className="h-10 w-auto" />
                </Link>
            </div>

            <nav className="flex items-center space-x-8 ml-40 mr-auto"> 
                <NavLink to="/" className={getNavLinkClass}>INICIO</NavLink>
                
                {/* 🚨 MENÚ DESPLEGABLE EQUIPOS (Se activa con hover) */}
                <div className="relative group">
                    <span className={teamsLinkClass}>
                        EQUIPOS
                    </span>

                    {/* Contenedor del Dropdown */}
                    <div className="absolute left-0 top-full mt-2 w-48 bg-header-bg border border-volt-violet rounded-lg shadow-xl 
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-y-0 origin-top group-hover:scale-y-100 z-50">
                        
                        <NavLink 
                            to="/equipos/lol" 
                            className="block px-4 py-3 text-light hover:bg-volt-violet transition-colors rounded-t-lg"
                        >
                            League of Legends
                        </NavLink>
                        
                        <NavLink 
                            to="/equipos/pokemon" 
                            className="block px-4 py-3 text-light hover:bg-volt-violet transition-colors rounded-b-lg"
                        >
                            Pokémon
                        </NavLink>
                        
                    </div>
                </div>
                <NavLink to="/shop" className={getNavLinkClass}>SHOP</NavLink>
                <NavLink to="/noticias" className={getNavLinkClass}>NOTICIAS</NavLink>             
                <NavLink to="/partidos" className={getNavLinkClass}>PARTIDOS</NavLink>
                <NavLink to="/contacto" className={getNavLinkClass}>CONTACTO</NavLink>
            </nav>
            <div className="flex items-center space-x-12"> 
                <a href="https://twitch.tv/VolticonsEsports" target="_blank" rel="noopener noreferrer" 
                   className="text-light hover:text-volt-violet transition-colors text-xl">
                    <FaTwitch />
                </a>
                <a href="https://twitter.com/Volticons" target="_blank" rel="noopener noreferrer" 
                   className="text-light hover:text-volt-violet transition-colors text-xl">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com/VolticonsUY" target="_blank" rel="noopener noreferrer" 
                   className="text-light hover:text-volt-violet transition-colors text-xl">
                    <FaInstagram />
                </a>
                <a href="https://youtube.com/VolticonsUY" target="_blank" rel="noopener noreferrer" 
                   className="text-light hover:text-volt-violet transition-colors text-xl">
                    <FaYoutube />
                </a>
                <a href="https://www.tiktok.com/@VolticonsUY" target="_blank" rel="noopener noreferrer" 
                   className="text-light hover:text-volt-violet transition-colors text-xl">
                    <FaTiktok />
                </a>
                
            </div>
        </header>
    );
};

export default Header;