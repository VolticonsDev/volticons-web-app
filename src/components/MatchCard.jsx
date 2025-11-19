// src/components/MatchCard.jsx
import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale'; 
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa'; // Asegúrate de importar FaRegCalendarAlt si lo usas

// Componente para mostrar la cuenta regresiva.
const CountdownDisplay = ({ time }) => (
  <div className="flex justify-center space-x-4 mt-2">
    {Object.entries(time).map(([unit, value]) => (
      <div key={unit} className="flex flex-col items-center">
        <span className="text-3xl font-bold text-volt-orange">{String(value).padStart(2, '0')}</span>
        <span className="text-sm font-medium text-gray-400 capitalize">
          {unit === 'days' ? 'Días' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Minutos' : 'Segundos'}
        </span>
      </div>
    ))}
  </div>
);

const MatchCard = ({ match, showCountdown = false, countdownTime }) => {
  const { teamHome, teamAway, league, date, location, teamLogoHome, teamLogoAway, category } = match;

  // Formato de fecha en español
  const formattedDate = format(new Date(date), "EEEE, d 'de' MMMM, HH:mm", { locale: es });

  return (
    <div 
      className="bg-header-bg p-6 rounded-xl shadow-lg hover:shadow-volt-violet/50 transition-all duration-300 transform hover:scale-[1.03] border-2 border-volt-violet"
      data-aos="fade-up" 
    >
      {/* Encabezado y Liga */}
      <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3">
        <span className="text-sm font-semibold text-volt-orange uppercase tracking-widest">{league}</span>
        <span className="text-xs font-medium text-light bg-volt-violet px-3 py-1 rounded-full">{category}</span>
      </div>

      {/* Equipos */}
      <div className="flex items-center justify-between my-4">
        
        <div className="flex flex-col items-center w-1/3">
          <img src={teamLogoHome} alt={teamHome} className="w-16 h-16 object-contain mb-2 rounded-full border-2 border-volt-orange" />
          <p className="text-light text-lg font-bold text-center truncate">{teamHome}</p>
        </div>

        {/* VS Central / Cuenta Regresiva */}
        <div className="w-1/3 flex flex-col items-center">
          <span className="text-4xl font-black text-volt-violet italic">VS</span>
          {showCountdown && countdownTime ? (
            <CountdownDisplay time={countdownTime} />
          ) : (
            <span className="text-sm font-medium text-gray-400 mt-2">Próximo evento</span>
          )}
        </div>
        
        <div className="flex flex-col items-center w-1/3">
          <img src={teamLogoAway} alt={teamAway} className="w-16 h-16 object-contain mb-2 rounded-full border-2 border-volt-orange" />
          <p className="text-light text-lg font-bold text-center truncate">{teamAway}</p>
        </div>
      </div>

      {/* Información del Evento */}
      <div className="mt-4 pt-3 border-t border-gray-700">
        <p className="text-center text-sm font-medium text-gray-300 flex items-center justify-center">
          <FaRegCalendarAlt className="mr-2 text-volt-orange" /> {formattedDate}
        </p>
        <p className="text-center text-sm font-medium text-gray-300 mt-1 flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2 text-volt-orange" /> {location}
        </p>
      </div>
      
      {/* Botón de acción */}
      <button className="w-full mt-4 py-2 bg-volt-orange text-dark font-bold rounded-lg hover:bg-volt-violet transition-colors duration-200 shadow-lg">
          Ver Detalles
      </button>
      
    </div>
  );
};

export default MatchCard;