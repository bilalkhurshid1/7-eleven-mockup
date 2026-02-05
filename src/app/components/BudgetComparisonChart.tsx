import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link2 } from 'lucide-react';

const dataAll = [
  { month: 'Jan', Actual: 1095000, Target: 1100000 },
  { month: 'Feb', Actual: 1183000, Target: 1150000 },
  { month: 'Mar', Actual: 1317000, Target: 1200000 },
  { month: 'Apr', Actual: 1425000, Target: 1300000 },
  { month: 'May', Actual: 1368000, Target: 1250000 },
];

const dataAWS = [
  { month: 'Jan', Actual: 580000, Target: 600000 },
  { month: 'Feb', Actual: 620000, Target: 630000 },
  { month: 'Mar', Actual: 690000, Target: 650000 },
  { month: 'Apr', Actual: 750000, Target: 700000 },
  { month: 'May', Actual: 710000, Target: 680000 },
];

const dataAzure = [
  { month: 'Jan', Actual: 350000, Target: 340000 },
  { month: 'Feb', Actual: 380000, Target: 360000 },
  { month: 'Mar', Actual: 420000, Target: 390000 },
  { month: 'Apr', Actual: 450000, Target: 420000 },
  { month: 'May', Actual: 440000, Target: 410000 },
];

const dataGCP = [
  { month: 'Jan', Actual: 120000, Target: 115000 },
  { month: 'Feb', Actual: 135000, Target: 125000 },
  { month: 'Mar', Actual: 155000, Target: 135000 },
  { month: 'Apr', Actual: 170000, Target: 145000 },
  { month: 'May', Actual: 165000, Target: 140000 },
];

const dataOCI = [
  { month: 'Jan', Actual: 45000, Target: 45000 },
  { month: 'Feb', Actual: 48000, Target: 35000 },
  { month: 'Mar', Actual: 52000, Target: 25000 },
  { month: 'Apr', Actual: 55000, Target: 35000 },
  { month: 'May', Actual: 53000, Target: 20000 },
];

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(1)}M`;
};

interface BudgetComparisonChartProps {
  selectedProvider?: string;
}

export function BudgetComparisonChart({ selectedProvider = 'All' }: BudgetComparisonChartProps) {
  const getData = () => {
    switch (selectedProvider) {
      case 'AWS':
        return dataAWS;
      case 'Azure':
        return dataAzure;
      case 'GCP':
        return dataGCP;
      case 'OCI':
        return dataOCI;
      default:
        return dataAll;
    }
  };

  const data = getData();

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[13px] text-gray-800" style={{ fontWeight: 600 }}>
          Actuals vs Target – YTD
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
          <Line 
            type="monotone" 
            dataKey="Actual" 
            stroke="#dc2626" 
            strokeWidth={2.5} 
            dot={{ r: 3 }} 
          />
          <Line 
            type="monotone" 
            dataKey="Target" 
            stroke="#6b7280" 
            strokeWidth={2.5} 
            strokeDasharray="5 5"
            dot={{ r: 3 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}