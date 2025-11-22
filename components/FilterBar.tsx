'use client';

import { useState } from 'react';

interface FilterBarProps {
  onFilterChange?: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'All Styles' },
  { id: 'under-100', label: 'Under $100' },
  { id: '100-200', label: '$100-$200' },
  { id: 'premium', label: 'Premium' },
  { id: 'merino', label: 'Merino Wool' },
  { id: 'cotton', label: 'Cotton' },
  { id: 'performance', label: 'Performance' },
];

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    onFilterChange?.(filterId);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`
            px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all
            ${
              activeFilter === filter.id
                ? 'bg-charcoal-800 text-white border-charcoal-800'
                : 'bg-white text-charcoal-600 border-sand-300 hover:border-charcoal-800 hover:text-charcoal-800'
            }
            border
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}