import React from 'react';
import { FaSort, FaFilter } from 'react-icons/fa';

const SidebarFilter = ({ categories, filters, onFilterChange }) => {
    
    // Opciones de ordenamiento
    const sortOptions = [
        { value: 'default', label: 'Ordenar por' },
        { value: 'price_asc', label: 'Precio: Menor a Mayor' },
        { value: 'price_desc', label: 'Precio: Mayor a Menor' },
    ];

    return (
        <div className="w-64 p-6 bg-header-bg rounded-xl shadow-lg border border-volt-violet text-light sticky top-24 mr-8"> 
            
            <h3 className="text-xl font-bold mb-4 flex items-center border-b border-gray-700 pb-2">
                <FaSort className="mr-2 text-volt-orange" /> Ordenar por
            </h3>
            
            <select
                value={filters.sort || 'default'}
                onChange={(e) => onFilterChange('sort', e.target.value)}
                className="w-full bg-dark-bg border border-gray-600 rounded p-2 text-sm text-light focus:ring-volt-orange mb-8 transition-colors"
            >
                {sortOptions.map(option => (
                    <option key={option.value} value={option.value} disabled={option.value === 'default'}>
                        {option.label}
                    </option>
                ))}
            </select>


            <h3 className="text-xl font-bold mb-4 flex items-center border-b border-gray-700 pb-2">
                <FaFilter className="mr-2 text-volt-orange" /> Categorías
            </h3>

            <div className="space-y-2 text-left">
                {filters.categories.map(category => (
                    <div key={category} className="flex items-center">
                        <input
                            type="radio"
                            id={category}
                            name="category-filter"
                            checked={filters.category === category}
                            onChange={() => onFilterChange('category', category)}
                            className="mr-3 h-4 w-4 bg-dark-bg border-gray-600 rounded-full focus:ring-volt-orange text-volt-orange"
                        />
                        <label htmlFor={category} className="text-sm cursor-pointer hover:text-volt-orange">
                            {category === 'All' ? 'Todas' : category}
                        </label>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default SidebarFilter;