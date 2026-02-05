import { ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface LineItem {
  name: string;
  yearValue: number;
  quarterValues: { [quarter: string]: number };
  monthValues: { [month: string]: number };
}

interface CostType {
  name: string;
  yearValue: number;
  quarterValues: { [quarter: string]: number };
  monthValues: { [month: string]: number };
  lineItems: LineItem[];
}

interface ProviderData {
  name: string;
  color: string;
  yearValue: number;
  quarterValues: { [quarter: string]: number };
  monthValues: { [month: string]: number };
  costTypes: CostType[];
}

const matrixData: ProviderData[] = [
  {
    name: 'AWS',
    color: '#ff9900',
    yearValue: 3000000,
    quarterValues: { 'Q1': 1800000, 'Q2': 1200000 },
    monthValues: { 'Jan': 580000, 'Feb': 620000, 'Mar': 600000, 'Apr': 750000, 'May': 450000 },
    costTypes: [
      {
        name: 'Compute',
        yearValue: 1500000,
        quarterValues: { 'Q1': 900000, 'Q2': 600000 },
        monthValues: { 'Jan': 290000, 'Feb': 310000, 'Mar': 300000, 'Apr': 375000, 'May': 225000 },
        lineItems: [
          {
            name: 'EC2 Instances',
            yearValue: 800000,
            quarterValues: { 'Q1': 480000, 'Q2': 320000 },
            monthValues: { 'Jan': 155000, 'Feb': 165000, 'Mar': 160000, 'Apr': 200000, 'May': 120000 }
          },
          {
            name: 'Lambda Functions',
            yearValue: 450000,
            quarterValues: { 'Q1': 270000, 'Q2': 180000 },
            monthValues: { 'Jan': 87000, 'Feb': 93000, 'Mar': 90000, 'Apr': 112500, 'May': 67500 }
          },
          {
            name: 'ECS/Fargate',
            yearValue: 250000,
            quarterValues: { 'Q1': 150000, 'Q2': 100000 },
            monthValues: { 'Jan': 48000, 'Feb': 52000, 'Mar': 50000, 'Apr': 62500, 'May': 37500 }
          }
        ]
      },
      {
        name: 'Storage',
        yearValue: 750000,
        quarterValues: { 'Q1': 450000, 'Q2': 300000 },
        monthValues: { 'Jan': 145000, 'Feb': 155000, 'Mar': 150000, 'Apr': 187500, 'May': 112500 },
        lineItems: [
          {
            name: 'S3 Storage',
            yearValue: 400000,
            quarterValues: { 'Q1': 240000, 'Q2': 160000 },
            monthValues: { 'Jan': 77000, 'Feb': 83000, 'Mar': 80000, 'Apr': 100000, 'May': 60000 }
          },
          {
            name: 'EBS Volumes',
            yearValue: 250000,
            quarterValues: { 'Q1': 150000, 'Q2': 100000 },
            monthValues: { 'Jan': 48000, 'Feb': 52000, 'Mar': 50000, 'Apr': 62500, 'May': 37500 }
          },
          {
            name: 'EFS/FSx',
            yearValue: 100000,
            quarterValues: { 'Q1': 60000, 'Q2': 40000 },
            monthValues: { 'Jan': 20000, 'Feb': 20000, 'Mar': 20000, 'Apr': 25000, 'May': 15000 }
          }
        ]
      },
      {
        name: 'AI/ML',
        yearValue: 450000,
        quarterValues: { 'Q1': 270000, 'Q2': 180000 },
        monthValues: { 'Jan': 87000, 'Feb': 93000, 'Mar': 90000, 'Apr': 112500, 'May': 67500 },
        lineItems: [
          {
            name: 'SageMaker',
            yearValue: 300000,
            quarterValues: { 'Q1': 180000, 'Q2': 120000 },
            monthValues: { 'Jan': 58000, 'Feb': 62000, 'Mar': 60000, 'Apr': 75000, 'May': 45000 }
          },
          {
            name: 'Bedrock',
            yearValue: 150000,
            quarterValues: { 'Q1': 90000, 'Q2': 60000 },
            monthValues: { 'Jan': 29000, 'Feb': 31000, 'Mar': 30000, 'Apr': 37500, 'May': 22500 }
          }
        ]
      },
      {
        name: 'Networking',
        yearValue: 300000,
        quarterValues: { 'Q1': 180000, 'Q2': 120000 },
        monthValues: { 'Jan': 58000, 'Feb': 62000, 'Mar': 60000, 'Apr': 75000, 'May': 45000 },
        lineItems: [
          {
            name: 'CloudFront',
            yearValue: 150000,
            quarterValues: { 'Q1': 90000, 'Q2': 60000 },
            monthValues: { 'Jan': 29000, 'Feb': 31000, 'Mar': 30000, 'Apr': 37500, 'May': 22500 }
          },
          {
            name: 'VPC/Transit Gateway',
            yearValue: 150000,
            quarterValues: { 'Q1': 90000, 'Q2': 60000 },
            monthValues: { 'Jan': 29000, 'Feb': 31000, 'Mar': 30000, 'Apr': 37500, 'May': 22500 }
          }
        ]
      }
    ]
  },
  {
    name: 'Azure',
    color: '#0078d4',
    yearValue: 1900000,
    quarterValues: { 'Q1': 1100000, 'Q2': 800000 },
    monthValues: { 'Jan': 350000, 'Feb': 380000, 'Mar': 370000, 'Apr': 450000, 'May': 350000 },
    costTypes: [
      {
        name: 'Compute',
        yearValue: 950000,
        quarterValues: { 'Q1': 550000, 'Q2': 400000 },
        monthValues: { 'Jan': 175000, 'Feb': 190000, 'Mar': 185000, 'Apr': 225000, 'May': 175000 },
        lineItems: [
          {
            name: 'Virtual Machines',
            yearValue: 600000,
            quarterValues: { 'Q1': 330000, 'Q2': 270000 },
            monthValues: { 'Jan': 105000, 'Feb': 114000, 'Mar': 111000, 'Apr': 135000, 'May': 135000 }
          },
          {
            name: 'App Service',
            yearValue: 250000,
            quarterValues: { 'Q1': 150000, 'Q2': 100000 },
            monthValues: { 'Jan': 52500, 'Feb': 57000, 'Mar': 40500, 'Apr': 67500, 'May': 32500 }
          },
          {
            name: 'Functions',
            yearValue: 100000,
            quarterValues: { 'Q1': 70000, 'Q2': 30000 },
            monthValues: { 'Jan': 17500, 'Feb': 19000, 'Mar': 33500, 'Apr': 22500, 'May': 7500 }
          }
        ]
      },
      {
        name: 'Storage',
        yearValue: 475000,
        quarterValues: { 'Q1': 275000, 'Q2': 200000 },
        monthValues: { 'Jan': 87500, 'Feb': 95000, 'Mar': 92500, 'Apr': 112500, 'May': 87500 },
        lineItems: [
          {
            name: 'Blob Storage',
            yearValue: 300000,
            quarterValues: { 'Q1': 165000, 'Q2': 135000 },
            monthValues: { 'Jan': 52500, 'Feb': 57000, 'Mar': 55500, 'Apr': 67500, 'May': 67500 }
          },
          {
            name: 'Managed Disks',
            yearValue: 175000,
            quarterValues: { 'Q1': 110000, 'Q2': 65000 },
            monthValues: { 'Jan': 35000, 'Feb': 38000, 'Mar': 37000, 'Apr': 45000, 'May': 20000 }
          }
        ]
      },
      {
        name: 'AI/ML',
        yearValue: 285000,
        quarterValues: { 'Q1': 165000, 'Q2': 120000 },
        monthValues: { 'Jan': 52500, 'Feb': 57000, 'Mar': 55500, 'Apr': 67500, 'May': 52500 },
        lineItems: [
          {
            name: 'Cognitive Services',
            yearValue: 190000,
            quarterValues: { 'Q1': 110000, 'Q2': 80000 },
            monthValues: { 'Jan': 35000, 'Feb': 38000, 'Mar': 37000, 'Apr': 45000, 'May': 35000 }
          },
          {
            name: 'Machine Learning',
            yearValue: 95000,
            quarterValues: { 'Q1': 55000, 'Q2': 40000 },
            monthValues: { 'Jan': 17500, 'Feb': 19000, 'Mar': 18500, 'Apr': 22500, 'May': 17500 }
          }
        ]
      },
      {
        name: 'Networking',
        yearValue: 190000,
        quarterValues: { 'Q1': 110000, 'Q2': 80000 },
        monthValues: { 'Jan': 35000, 'Feb': 38000, 'Mar': 37000, 'Apr': 45000, 'May': 35000 },
        lineItems: [
          {
            name: 'CDN',
            yearValue: 95000,
            quarterValues: { 'Q1': 55000, 'Q2': 40000 },
            monthValues: { 'Jan': 17500, 'Feb': 19000, 'Mar': 18500, 'Apr': 22500, 'May': 17500 }
          },
          {
            name: 'VPN Gateway',
            yearValue: 95000,
            quarterValues: { 'Q1': 55000, 'Q2': 40000 },
            monthValues: { 'Jan': 17500, 'Feb': 19000, 'Mar': 18500, 'Apr': 22500, 'May': 17500 }
          }
        ]
      }
    ]
  },
  {
    name: 'GCP',
    color: '#4285f4',
    yearValue: 700000,
    quarterValues: { 'Q1': 400000, 'Q2': 300000 },
    monthValues: { 'Jan': 120000, 'Feb': 135000, 'Mar': 145000, 'Apr': 170000, 'May': 130000 },
    costTypes: [
      {
        name: 'Compute',
        yearValue: 350000,
        quarterValues: { 'Q1': 200000, 'Q2': 150000 },
        monthValues: { 'Jan': 60000, 'Feb': 67500, 'Mar': 72500, 'Apr': 85000, 'May': 65000 },
        lineItems: [
          {
            name: 'Compute Engine',
            yearValue: 210000,
            quarterValues: { 'Q1': 120000, 'Q2': 90000 },
            monthValues: { 'Jan': 36000, 'Feb': 40500, 'Mar': 43500, 'Apr': 51000, 'May': 39000 }
          },
          {
            name: 'Cloud Functions',
            yearValue: 140000,
            quarterValues: { 'Q1': 80000, 'Q2': 60000 },
            monthValues: { 'Jan': 24000, 'Feb': 27000, 'Mar': 29000, 'Apr': 34000, 'May': 26000 }
          }
        ]
      },
      {
        name: 'Storage',
        yearValue: 175000,
        quarterValues: { 'Q1': 100000, 'Q2': 75000 },
        monthValues: { 'Jan': 30000, 'Feb': 33750, 'Mar': 36250, 'Apr': 42500, 'May': 32500 },
        lineItems: [
          {
            name: 'Cloud Storage',
            yearValue: 105000,
            quarterValues: { 'Q1': 60000, 'Q2': 45000 },
            monthValues: { 'Jan': 18000, 'Feb': 20250, 'Mar': 21750, 'Apr': 25500, 'May': 19500 }
          },
          {
            name: 'Persistent Disk',
            yearValue: 70000,
            quarterValues: { 'Q1': 40000, 'Q2': 30000 },
            monthValues: { 'Jan': 12000, 'Feb': 13500, 'Mar': 14500, 'Apr': 17000, 'May': 13000 }
          }
        ]
      },
      {
        name: 'AI/ML',
        yearValue: 105000,
        quarterValues: { 'Q1': 60000, 'Q2': 45000 },
        monthValues: { 'Jan': 18000, 'Feb': 20250, 'Mar': 21750, 'Apr': 25500, 'May': 19500 },
        lineItems: [
          {
            name: 'Vertex AI',
            yearValue: 70000,
            quarterValues: { 'Q1': 40000, 'Q2': 30000 },
            monthValues: { 'Jan': 12000, 'Feb': 13500, 'Mar': 14500, 'Apr': 17000, 'May': 13000 }
          },
          {
            name: 'AI Platform',
            yearValue: 35000,
            quarterValues: { 'Q1': 20000, 'Q2': 15000 },
            monthValues: { 'Jan': 6000, 'Feb': 6750, 'Mar': 7250, 'Apr': 8500, 'May': 6500 }
          }
        ]
      },
      {
        name: 'Networking',
        yearValue: 70000,
        quarterValues: { 'Q1': 40000, 'Q2': 30000 },
        monthValues: { 'Jan': 12000, 'Feb': 13500, 'Mar': 14500, 'Apr': 17000, 'May': 13000 },
        lineItems: [
          {
            name: 'Cloud CDN',
            yearValue: 35000,
            quarterValues: { 'Q1': 20000, 'Q2': 15000 },
            monthValues: { 'Jan': 6000, 'Feb': 6750, 'Mar': 7250, 'Apr': 8500, 'May': 6500 }
          },
          {
            name: 'VPC',
            yearValue: 35000,
            quarterValues: { 'Q1': 20000, 'Q2': 15000 },
            monthValues: { 'Jan': 6000, 'Feb': 6750, 'Mar': 7250, 'Apr': 8500, 'May': 6500 }
          }
        ]
      }
    ]
  },
  {
    name: 'OCI',
    color: '#c74634',
    yearValue: 250000,
    quarterValues: { 'Q1': 150000, 'Q2': 100000 },
    monthValues: { 'Jan': 45000, 'Feb': 48000, 'Mar': 57000, 'Apr': 55000, 'May': 45000 },
    costTypes: [
      {
        name: 'Compute',
        yearValue: 125000,
        quarterValues: { 'Q1': 75000, 'Q2': 50000 },
        monthValues: { 'Jan': 22500, 'Feb': 24000, 'Mar': 28500, 'Apr': 27500, 'May': 22500 },
        lineItems: [
          {
            name: 'Compute Instances',
            yearValue: 100000,
            quarterValues: { 'Q1': 60000, 'Q2': 40000 },
            monthValues: { 'Jan': 18000, 'Feb': 19200, 'Mar': 22800, 'Apr': 22000, 'May': 18000 }
          },
          {
            name: 'Functions',
            yearValue: 25000,
            quarterValues: { 'Q1': 15000, 'Q2': 10000 },
            monthValues: { 'Jan': 4500, 'Feb': 4800, 'Mar': 5700, 'Apr': 5500, 'May': 4500 }
          }
        ]
      },
      {
        name: 'Storage',
        yearValue: 75000,
        quarterValues: { 'Q1': 45000, 'Q2': 30000 },
        monthValues: { 'Jan': 13500, 'Feb': 14400, 'Mar': 17100, 'Apr': 16500, 'May': 13500 },
        lineItems: [
          {
            name: 'Object Storage',
            yearValue: 50000,
            quarterValues: { 'Q1': 30000, 'Q2': 20000 },
            monthValues: { 'Jan': 9000, 'Feb': 9600, 'Mar': 11400, 'Apr': 11000, 'May': 9000 }
          },
          {
            name: 'Block Storage',
            yearValue: 25000,
            quarterValues: { 'Q1': 15000, 'Q2': 10000 },
            monthValues: { 'Jan': 4500, 'Feb': 4800, 'Mar': 5700, 'Apr': 5500, 'May': 4500 }
          }
        ]
      },
      {
        name: 'AI/ML',
        yearValue: 25000,
        quarterValues: { 'Q1': 15000, 'Q2': 10000 },
        monthValues: { 'Jan': 4500, 'Feb': 4800, 'Mar': 5700, 'Apr': 5500, 'May': 4500 },
        lineItems: [
          {
            name: 'Data Science',
            yearValue: 25000,
            quarterValues: { 'Q1': 15000, 'Q2': 10000 },
            monthValues: { 'Jan': 4500, 'Feb': 4800, 'Mar': 5700, 'Apr': 5500, 'May': 4500 }
          }
        ]
      },
      {
        name: 'Networking',
        yearValue: 25000,
        quarterValues: { 'Q1': 15000, 'Q2': 10000 },
        monthValues: { 'Jan': 4500, 'Feb': 4800, 'Mar': 5700, 'Apr': 5500, 'May': 4500 },
        lineItems: [
          {
            name: 'Load Balancer',
            yearValue: 25000,
            quarterValues: { 'Q1': 15000, 'Q2': 10000 },
            monthValues: { 'Jan': 4500, 'Feb': 4800, 'Mar': 5700, 'Apr': 5500, 'May': 4500 }
          }
        ]
      }
    ]
  }
];

const formatCurrency = (value: number) => {
  return `$${(value / 1000000).toFixed(2)}M`;
};

interface DrillDownMatrixProps {
  selectedProvider?: string;
}

interface MatrixColumn {
  key: string;
  label: string;
  getValue: (item: any) => number;
  expandable?: boolean;
  expanded?: boolean;
}

export function DrillDownMatrix({ selectedProvider = 'All' }: DrillDownMatrixProps) {
  const [expandedProviders, setExpandedProviders] = useState<Set<string>>(new Set());
  const [expandedCostTypes, setExpandedCostTypes] = useState<Set<string>>(new Set());
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set());
  const [expandedQuarters, setExpandedQuarters] = useState<Set<string>>(new Set());

  const toggleProvider = (providerName: string) => {
    const newExpanded = new Set(expandedProviders);
    if (newExpanded.has(providerName)) {
      newExpanded.delete(providerName);
      // Also collapse all cost types for this provider
      const newCostTypes = new Set(expandedCostTypes);
      const provider = matrixData.find(p => p.name === providerName);
      provider?.costTypes.forEach(ct => {
        newCostTypes.delete(`${providerName}-${ct.name}`);
      });
      setExpandedCostTypes(newCostTypes);
    } else {
      newExpanded.add(providerName);
    }
    setExpandedProviders(newExpanded);
  };

  const toggleCostType = (providerName: string, costTypeName: string) => {
    const key = `${providerName}-${costTypeName}`;
    const newExpanded = new Set(expandedCostTypes);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedCostTypes(newExpanded);
  };

  const toggleYear = (year: string) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
      // Also collapse all quarters for this year
      const newQuarters = new Set(expandedQuarters);
      ['Q1', 'Q2'].forEach(q => {
        newQuarters.delete(`${year}-${q}`);
      });
      setExpandedQuarters(newQuarters);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const toggleQuarter = (year: string, quarter: string) => {
    const key = `${year}-${quarter}`;
    const newExpanded = new Set(expandedQuarters);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedQuarters(newExpanded);
  };

  const filteredData = selectedProvider === 'All' 
    ? matrixData 
    : matrixData.filter(item => item.name === selectedProvider);

  const grandTotal = filteredData.reduce((sum, item) => sum + item.yearValue, 0);

  // Helper to get columns dynamically
  const getColumns = (): MatrixColumn[] => {
    const columns: MatrixColumn[] = [];
    
    const is2026Expanded = expandedYears.has('2026');
    columns.push({
      key: '2026',
      label: '2026',
      getValue: (item: any) => item.yearValue || 0,
      expandable: true,
      expanded: is2026Expanded
    });

    if (is2026Expanded) {
      ['Q1', 'Q2'].forEach(quarter => {
        const isQuarterExpanded = expandedQuarters.has(`2026-${quarter}`);
        columns.push({
          key: `2026-${quarter}`,
          label: quarter,
          getValue: (item: any) => item.quarterValues?.[quarter] || 0,
          expandable: true,
          expanded: isQuarterExpanded
        });

        if (isQuarterExpanded) {
          const months = quarter === 'Q1' ? ['Jan', 'Feb', 'Mar'] : ['Apr', 'May'];
          months.forEach(month => {
            columns.push({
              key: `2026-${quarter}-${month}`,
              label: month,
              getValue: (item: any) => item.monthValues?.[month] || 0
            });
          });
        }
      });
    }

    // Add Total column at the end
    columns.push({
      key: 'total',
      label: 'Total',
      getValue: (item: any) => item.yearValue || 0
    });

    return columns;
  };

  const columns = getColumns();

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-sm">
      <h3 className="text-[13px] mb-4 text-gray-800" style={{ fontWeight: 600 }}>
        Detailed Spend Matrix
      </h3>
      
      <div className="overflow-hidden border border-gray-200 rounded-sm">
        {/* Header */}
        <div className={`grid bg-gray-50 border-b border-gray-200`} style={{ gridTemplateColumns: `300px repeat(${columns.length}, 120px)` }}>
          <div className="px-4 py-3 text-xs text-gray-600" style={{ fontWeight: 600 }}>
            Provider / Cost Type / Line Item
          </div>
          {columns.map(column => (
            <div
              key={column.key}
              className={`px-4 py-3 text-xs text-gray-600 text-right flex items-center justify-end gap-1 ${
                column.expandable ? 'cursor-pointer hover:bg-gray-100' : ''
              }`}
              style={{ fontWeight: 600 }}
              onClick={column.expandable ? () => {
                if (column.key === '2026') {
                  toggleYear('2026');
                } else if (column.key.startsWith('2026-Q')) {
                  const quarter = column.key.split('-')[1];
                  toggleQuarter('2026', quarter);
                }
              } : undefined}
            >
              {column.label}
              {column.expandable && (
                column.expanded ? 
                  <ChevronDown className="w-3 h-3" /> : 
                  <ChevronRight className="w-3 h-3" />
              )}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {filteredData.map((providerData, providerIndex) => {
          const isProviderExpanded = expandedProviders.has(providerData.name);
          
          return (
            <div key={providerData.name}>
              {/* Provider Row */}
              <div
                className={`grid hover:bg-gray-50 transition-colors ${
                  providerIndex < filteredData.length - 1 || isProviderExpanded ? 'border-b border-gray-200' : ''
                }`}
                style={{ gridTemplateColumns: `300px repeat(${columns.length}, 120px)` }}
              >
                <div 
                  className="px-4 py-3 flex items-center gap-2 cursor-pointer group"
                  onClick={() => toggleProvider(providerData.name)}
                >
                  {isProviderExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  )}
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: providerData.color }}
                    />
                    <span className="text-sm text-gray-900" style={{ fontWeight: 600 }}>
                      {providerData.name}
                    </span>
                  </div>
                </div>
                {columns.map(column => (
                  <div key={column.key} className="px-4 py-3 text-sm text-right text-gray-900" style={{ fontWeight: 600 }}>
                    {formatCurrency(column.getValue(providerData))}
                  </div>
                ))}
              </div>
              
              {/* Cost Types */}
              {isProviderExpanded && providerData.costTypes.map((costType, ctIndex) => {
                const costTypeKey = `${providerData.name}-${costType.name}`;
                const isCostTypeExpanded = expandedCostTypes.has(costTypeKey);
                
                return (
                  <div key={costType.name}>
                    {/* Cost Type Row */}
                    <div
                      className={`grid bg-gray-50 hover:bg-gray-100 transition-colors ${
                        isCostTypeExpanded || ctIndex < providerData.costTypes.length - 1 ? 'border-b border-gray-200' : 'border-b border-gray-200'
                      }`}
                      style={{ gridTemplateColumns: `300px repeat(${columns.length}, 120px)` }}
                    >
                      <div 
                        className="px-4 py-2.5 flex items-center gap-2 pl-8 cursor-pointer group"
                        onClick={() => toggleCostType(providerData.name, costType.name)}
                      >
                        {isCostTypeExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5 text-gray-600" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                        )}
                        <span className="text-[13px] text-gray-800" style={{ fontWeight: 600 }}>
                          {costType.name}
                        </span>
                      </div>
                      {columns.map(column => (
                        <div key={column.key} className="px-4 py-2.5 text-[13px] text-gray-800 text-right" style={{ fontWeight: 600 }}>
                          {formatCurrency(column.getValue(costType))}
                        </div>
                      ))}
                    </div>
                    
                    {/* Line Items */}
                    {isCostTypeExpanded && costType.lineItems.map((lineItem, liIndex) => (
                      <div
                        key={lineItem.name}
                        className={`grid bg-gray-50 hover:bg-gray-100 transition-colors ${
                          liIndex < costType.lineItems.length - 1 ? 'border-b border-gray-100' : 'border-b border-gray-200'
                        }`}
                        style={{ gridTemplateColumns: `300px repeat(${columns.length}, 120px)` }}
                      >
                        <div className="px-4 py-2 flex items-center gap-2 pl-16">
                          <span className="text-[12px] text-gray-600">
                            {lineItem.name}
                          </span>
                        </div>
                        {columns.map(column => (
                          <div key={column.key} className="px-4 py-2 text-[12px] text-gray-700 text-right">
                            {formatCurrency(column.getValue(lineItem))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Total Row */}
        <div className="grid bg-gray-50 border-t-2 border-gray-300" style={{ gridTemplateColumns: `300px repeat(${columns.length}, 120px)` }}>
          <div className="px-4 py-3 text-sm text-gray-900" style={{ fontWeight: 600 }}>
            Grand Total
          </div>
          {columns.map(column => {
            const columnTotal = filteredData.reduce((sum, item) => sum + column.getValue(item), 0);
            return (
              <div key={column.key} className="px-4 py-3 text-sm text-gray-900 text-right" style={{ fontWeight: 600 }}>
                {formatCurrency(columnTotal)}
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-[11px] text-gray-500 mt-3 italic flex items-center gap-1">
        Click <ChevronRight className="w-3 h-3 inline" /> column headers to drill down: 2026 → Q1/Q2 → Jan/Feb/Mar/Apr/May
      </p>
    </div>
  );
}
