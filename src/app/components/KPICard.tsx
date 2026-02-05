interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
  trend?: 'up' | 'down' | 'neutral';
  trendColor?: 'green' | 'red' | 'gray';
  tooltip?: string;
}

export function KPICard({ title, value, subtitle, trend, trendColor = 'gray', tooltip }: KPICardProps) {
  const trendColors = {
    green: 'text-green-600',
    red: 'text-red-600',
    gray: 'text-gray-600'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-sm hover:shadow-md transition-shadow relative group">
      <div className="text-[11px] text-gray-500 uppercase tracking-wide mb-2.5" style={{ fontWeight: 600 }}>
        {title}
      </div>
      <div className="text-[32px] mb-2 text-gray-900" style={{ fontWeight: 600, lineHeight: '1.2' }}>
        {value}
      </div>
      <div className={`text-[12px] ${trendColors[trendColor]}`}>
        {subtitle}
      </div>
      
      {/* Tooltip */}
      {tooltip && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          <div className="bg-gray-900 text-white text-[11px] px-3 py-2 rounded shadow-lg whitespace-nowrap">
            {tooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
}