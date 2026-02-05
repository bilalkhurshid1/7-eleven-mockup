import { useState } from 'react';
import { FilterPill } from './components/FilterPill';
import { KPICard } from './components/KPICard';
import { CloudSpendChart } from './components/CloudSpendChart';
import { BudgetComparisonChart } from './components/BudgetComparisonChart';
import { ProviderBarChart } from './components/ProviderBarChart';
import { DrillDownMatrix } from './components/DrillDownMatrix';

export default function App() {
  const [chartDimension, setChartDimension] = useState<'provider' | 'costType' | 'businessUnit'>('provider');
  const [selectedProvider, setSelectedProvider] = useState<string>('All');

  return (
    <div className="min-h-screen bg-[#f3f2f1] p-6">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h1 className="text-[28px] mb-0.5 text-gray-900" style={{ fontWeight: 600 }}>
              Cloud Spend Dashboard
            </h1>
            <p className="text-[13px] text-gray-600">Executive Summary · YTD 2026</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded text-[11px] text-amber-700">
            <span style={{ fontWeight: 600 }}>MOCKUP</span> · Static Data
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white border border-gray-200 rounded-sm p-4 mb-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-gray-600 uppercase tracking-wide" style={{ fontWeight: 600 }}>
                Cloud Provider
              </label>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="px-4 py-2.5 bg-white border border-gray-300 text-gray-800 rounded-full text-[13px] hover:border-gray-400 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              >
                <option value="All">All</option>
                <option value="AWS">AWS</option>
                <option value="Azure">Azure</option>
                <option value="GCP">GCP</option>
                <option value="OCI">OCI</option>
              </select>
            </div>
            <FilterPill
              label="Date"
              options={['Jan-May 2026']}
              selected="Jan–May 2026 (YTD)"
              isSelected={false}
            />
            <FilterPill
              label="Cost Type"
              options={['All', 'Compute', 'Storage', 'AI/ML', 'Networking', 'Other']}
              selected="All"
              isSelected={false}
            />
            <FilterPill
              label="Business Unit"
              options={['All', 'Accounting', 'Retail', 'IT', 'Supply Chain', 'Digital Products']}
              selected="All"
              isSelected={false}
            />
          </div>
        </div>

        {/* KPI Cards - Row 1 */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <KPICard
            title="MTD Spend (May 2026)"
            value="$4.2M"
            subtitle="▲ 5% vs Apr · Over Budget"
            trendColor="red"
          />
          <KPICard
            title="Variance to Target (MTD)"
            value="-$320K (7.1%)"
            subtitle="Above Budget"
            trendColor="red"
          />
          <KPICard
            title="Top Business Unit"
            value="Retail"
            subtitle="$1.1M · ▲ 12% MoM"
            trendColor="gray"
          />
        </div>

        {/* KPI Cards - Row 2 */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <KPICard
            title="YoY Spend Growth"
            value="▲ 18% vs 2025"
            subtitle="YTD comparison"
            trendColor="gray"
          />
          <KPICard
            title="Forecasted Month-End"
            value="$4.8M ±5%"
            subtitle="Tracking 8% over budget"
            trendColor="red"
          />
          <KPICard
            title="Anomaly Alerts (MTD)"
            value="8 Total"
            subtitle="3 High · 5 Medium"
            trendColor="red"
            tooltip="3 High-severity alerts require immediate review."
          />
        </div>

        {/* Chart Dimension Selector */}
        <div className="mb-4 flex items-center gap-3">
          <label className="text-[11px] text-gray-600 uppercase tracking-wide" style={{ fontWeight: 600 }}>
            Chart Dimension:
          </label>
          <select
            value={chartDimension}
            onChange={(e) => setChartDimension(e.target.value as 'provider' | 'costType' | 'businessUnit')}
            className="px-3 py-1.5 bg-white border border-gray-300 rounded text-[13px] text-gray-800 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
          >
            <option value="provider">By Provider</option>
            <option value="costType">By Cost Type</option>
            <option value="businessUnit">By Business Unit</option>
          </select>
          <span className="text-[11px] text-gray-500 italic">
            All charts below share this dimension filter
          </span>
        </div>

        {/* Charts Section - Top Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white border border-gray-200 rounded-sm p-5">
            <CloudSpendChart dimension={chartDimension} selectedProvider={selectedProvider} />
          </div>
          <div className="bg-white border border-gray-200 rounded-sm p-5">
            <BudgetComparisonChart selectedProvider={selectedProvider} />
          </div>
        </div>

        {/* Charts Section - Bottom Row */}
        <div className="bg-white border border-gray-200 rounded-sm p-5 mb-6">
          <ProviderBarChart dimension={chartDimension} selectedProvider={selectedProvider} />
        </div>

        {/* Drill-Down Matrix */}
        <DrillDownMatrix selectedProvider={selectedProvider} />
      </div>
    </div>
  );
}