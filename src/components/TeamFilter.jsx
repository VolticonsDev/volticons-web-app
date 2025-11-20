import React from 'react';

const TeamFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-3 p-4 bg-header-bg rounded-lg shadow-xl mb-8 justify-center border border-volt-violet">
      <button
        onClick={() => onSelectCategory('All')}
        className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
          selectedCategory === 'All'
            ? 'bg-volt-orange text-dark shadow-md shadow-volt-orange/50'
            : 'bg-dark-bg text-gray-300 hover:bg-volt-violet'
        }`}
      >
        Todos los Partidos
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-volt-orange text-dark shadow-md shadow-volt-orange/50'
              : 'bg-dark-bg text-gray-300 hover:bg-volt-violet'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default TeamFilter;