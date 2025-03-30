import React from 'react';
import { History, Clock } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentQuery } from '../store/querySlice';

export default function QueryHistory() {
  const dispatch = useDispatch();
  const { queryHistory } = useSelector((state: RootState) => state.query);

  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <History size={20} className="text-blue-600" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Query History</h2>
      </div>
      <div className="space-y-3">
        {queryHistory.map((query, index) => (
          <div
            key={index}
            className="query-card group cursor-pointer"
            onClick={() => dispatch(setCurrentQuery(query))}
          >
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-gray-400 mt-1 group-hover:text-blue-500 transition-colors" />
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors line-clamp-2">
                {query}
              </p>
            </div>
          </div>
        ))}
        {queryHistory.length === 0 && (
          <div className="text-center py-8">
            <div className="bg-gray-50 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <History size={24} className="text-gray-400" />
            </div>
            <p className="text-gray-500">No queries yet</p>
            <p className="text-sm text-gray-400">Your search history will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}