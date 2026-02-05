interface FilterPillProps {
  label: string;
  options: string[];
  selected: string | string[];
  isSelected?: boolean;
}

export function FilterPill({ label, options, selected, isSelected = false }: FilterPillProps) {
  const displayValue = Array.isArray(selected) ? selected.join(', ') : selected;

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] text-gray-600 uppercase tracking-wide" style={{ fontWeight: 600 }}>
        {label}
      </label>
      <div 
        className={`px-4 py-2.5 rounded-full text-[13px] transition-all cursor-pointer ${
          isSelected 
            ? 'bg-blue-600 text-white border border-blue-600 hover:bg-blue-700' 
            : 'bg-white border border-gray-300 text-gray-800 hover:border-gray-400 hover:shadow-sm'
        }`}
      >
        {displayValue}
      </div>
    </div>
  );
}