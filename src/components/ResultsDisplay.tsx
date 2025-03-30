import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Loader2, PieChart } from 'lucide-react';

export default function ResultsDisplay() {
  const { results, isLoading, error } = useSelector((state: RootState) => state.query);

  if (isLoading) {
    return (
      <div className="glass-effect rounded-2xl h-[400px] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin text-blue-500 h-8 w-8 mx-auto mb-4" />
          <p className="text-gray-500">Analyzing your query...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-effect rounded-2xl h-[400px] flex items-center justify-center">
        <div className="text-center text-red-500">
          <p className="font-medium">{error}</p>
          <p className="text-sm mt-2">Please try again with a different query</p>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="glass-effect rounded-2xl h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="bg-blue-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <PieChart size={32} className="text-blue-500" />
          </div>
          <p className="text-gray-500 font-medium">Enter a query to see insights</p>
          <p className="text-sm text-gray-400 mt-2">Your results will be visualized here</p>
        </div>
      </div>
    );
  }

  const chartData = results.labels.map((label: string, index: number) => ({
    name: label,
    value: results.data[index],
  }));

  return (
    <div className="glass-effect rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Analytics Results</h2>
      <div className="h-[400px] chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              fillOpacity={1} 
              fill="url(#colorValue)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}