import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link2 } from 'lucide-react';

const dataByProvider = [
  { month: 'Jan', AWS: 580000, Azure: 350000, GCP: 120000, OCI: 45000 },
  { month: 'Feb', AWS: 620000, Azure: 380000, GCP: 135000, OCI: 48000 },
  { month: 'Mar', AWS: 690000, Azure: 420000, GCP: 155000, OCI: 52000 },
  { month: 'Apr', AWS: 750000, Azure: 450000, GCP: 170000, OCI: 55000 },
  { month: 'May', AWS: 710000, Azure: 440000, GCP: 165000, OCI: 53000 },
];

const dataByCostType = [
  { month: 'Jan', Compute: 480000, Storage: 320000, 'AI/ML': 180000, Networking: 115000 },
  { month: 'Feb', Compute: 510000, Storage: 340000, 'AI/ML': 195000, Networking: 138000 },
  { month: 'Mar', Compute: 570000, Storage: 375000, 'AI/ML': 210000, Networking: 162000 },
  { month: 'Apr', Compute: 620000, Storage: 405000, 'AI/ML': 230000, Networking: 170000 },
  { month: 'May', Compute: 590000, Storage: 395000, 'AI/ML': 220000, Networking: 163000 },
];

const dataByBusinessUnit = [
  { month: 'Jan', Retail: 380000, IT: 290000, Accounting: 220000, 'Supply Chain': 155000, 'Digital Products': 50000 },
  { month: 'Feb', Retail: 410000, IT: 315000, Accounting: 235000, 'Supply Chain': 165000, 'Digital Products': 58000 },
  { month: 'Mar', Retail: 465000, IT: 350000, Accounting: 255000, 'Supply Chain': 180000, 'Digital Products': 67000 },
  { month: 'Apr', Retail: 510000, IT: 380000, Accounting: 275000, 'Supply Chain': 195000, 'Digital Products': 65000 },
  { month: 'May', Retail: 485000, IT: 365000, Accounting: 265000, 'Supply Chain': 188000, 'Digital Products': 65000 },
];

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(1)}M`;
};

interface CloudSpendChartProps {
  dimension?: 'provider' | 'costType' | 'businessUnit';
  selectedProvider?: string;
}

export function CloudSpendChart({ dimension = 'provider', selectedProvider = 'All' }: CloudSpendChartProps) {
  const getChartData = () => {
    switch (dimension) {
      case 'costType':
        return { data: dataByCostType, lines: ['Compute', 'Storage', 'AI/ML', 'Networking'] };
      case 'businessUnit':
        return { data: dataByBusinessUnit, lines: ['Retail', 'IT', 'Accounting', 'Supply Chain', 'Digital Products'] };
      default:
        // Filter by provider if not "All"
        if (selectedProvider !== 'All') {
          const filteredData = dataByProvider.map(month => ({
            month: month.month,
            [selectedProvider]: month[selectedProvider as keyof typeof month]
          }));
          return { data: filteredData, lines: [selectedProvider] };
        }
        return { data: dataByProvider, lines: ['AWS', 'Azure', 'GCP', 'OCI'] };
    }
  };

  const { data, lines } = getChartData();
  
  const colors: Record<string, string> = {
    AWS: '#ff9900',
    Azure: '#0078d4',
    GCP: '#4285f4',
    OCI: '#c74634',
    Compute: '#3b82f6',
    Storage: '#8b5cf6',
    'AI/ML': '#06b6d4',
    Networking: '#10b981',
    Retail: '#f59e0b',
    IT: '#6366f1',
    Accounting: '#ec4899',
    'Supply Chain': '#14b8a6',
    'Digital Products': '#84cc16'
  };

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[13px] text-gray-800" style={{ fontWeight: 600 }}>
          Cloud Spend by {dimension === 'provider' ? 'Provider' : dimension === 'costType' ? 'Cost Type' : 'Business Unit'} – YTD
        </h3>
        <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-blue-50 px-2 py-1 rounded">
          <Link2 className="w-3 h-3" />
          <span>Linked</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            stroke="#d1d5db"
          />
          <YAxis 
            tickFormatter={formatCurrency}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            stroke="#d1d5db"
          />
          <Tooltip 
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '12px' }}
            iconType="line"
          />
          {lines.map((line) => (
            <Line 
              key={line}
              type="monotone" 
              dataKey={line} 
              stroke={colors[line]} 
              strokeWidth={2} 
              dot={{ r: 3 }} 
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}