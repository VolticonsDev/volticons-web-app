import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-3 p-4 bg-header-bg rounded-lg shadow-xl mb-8 justify-center border border-volt-violet" data-aos="fade-up">
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 
            ${
                selectedCategory === category
                ? 'bg-volt-orange text-dark shadow-md shadow-volt-orange/50'

                : 'bg-dark-bg text-light hover:bg-volt-violet/20 hover:text-volt-orange'
            }
          `}
        >
          {category === 'All' ? 'Todos los Productos' : category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;