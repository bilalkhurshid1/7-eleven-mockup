import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Link2 } from 'lucide-react';

const dataByProvider = [
  { name: 'AWS', value: 2100000, color: '#ff9900' },
  { name: 'Azure', value: 1400000, color: '#0078d4' },
  { name: 'GCP', value: 500000, color: '#4285f4' },
  { name: 'OCI', value: 200000, color: '#c74634' },
];

const dataByCostType = [
  { name: 'Compute', value: 1800000, color: '#3b82f6' },
  { name: 'Storage', value: 1200000, color: '#8b5cf6' },
  { name: 'AI/ML', value: 700000, color: '#06b6d4' },
  { name: 'Networking', value: 500000, color: '#10b981' },
];

const dataByBusinessUnit = [
  { name: 'Retail', value: 1500000, color: '#f59e0b' },
  { name: 'IT', value: 1100000, color: '#6366f1' },
  { name: 'Accounting', value: 800000, color: '#ec4899' },
  { name: 'Supply Chain', value: 600000, color: '#14b8a6' },
  { name: 'Digital Products', value: 200000, color: '#84cc16' },
];

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(1)}M`;
};

interface ProviderBarChartProps {
  dimension?: 'provider' | 'costType' | 'businessUnit';
  selectedProvider?: string;
}

export function ProviderBarChart({ dimension = 'provider', selectedProvider = 'All' }: ProviderBarChartProps) {
  const getChartData = () => {
    switch (dimension) {
      case 'costType':
        return dataByCostType;
      case 'businessUnit':
        return dataByBusinessUnit;
      default:
        // Filter by provider if not "All"
        if (selectedProvider !== 'All') {
          return dataByProvider.filter(item => item.name === selectedProvider);
        }
        return dataByProvider;
    }
  };

  const data = getChartData();

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[13px] text-gray-800" style={{ fontWeight: 600 }}>
          YTD Spend by {dimension === 'provider' ? 'Provider' : dimension === 'costType' ? 'Cost Type' : 'Business Unit'}
        </h3>
        <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-blue-50 px-2 py-1 rounded">
          <Link2 className="w-3 h-3" />
          <span>Linked</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart 
          data={data} 
          layout="vertical"
          margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={true} vertical={false} />
          <XAxis 
            type="number"
            tickFormatter={formatCurrency}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            stroke="#d1d5db"
          />
          <YAxis 
            type="category"
            dataKey="name" 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            stroke="#d1d5db"
            width={90}
          />
          <Tooltip 
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              fontSize: '12px'
            }}
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}