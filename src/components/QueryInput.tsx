import React, { useState } from 'react';
import { Search, Send, Sparkles } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  setCurrentQuery,
  addToHistory,
  setLoading,
  setResults,
} from '../store/querySlice';

const mockApiCall = async (query: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [30, 45, 32, 70, 55, 65],
  };
};

export default function QueryInput() {
  const dispatch = useDispatch();
  const { currentQuery, suggestions } = useSelector((state: RootState) => state.query);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuery.trim()) return;

    dispatch(setLoading(true));
    dispatch(addToHistory(currentQuery));

    try {
      const results = await mockApiCall(currentQuery);
      dispatch(setResults(results));
    } catch (error) {
      console.error('Error processing query:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="relative w-full max-w-3xl">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative transform transition-all duration-300 hover:scale-[1.01]">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
          <input
            type="text"
            value={currentQuery}
            onChange={(e) => dispatch(setCurrentQuery(e.target.value))}
            onFocus={() => setShowSuggestions(true)}
            className="w-full pl-12 pr-12 py-4 glass-effect rounded-2xl shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Ask anything about your data..."
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <Send size={18} />
          </button>
        </div>
      </form>

      {showSuggestions && (
        <div className="absolute w-full mt-2 glass-effect rounded-xl shadow-lg border-0 z-10 overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => {
                dispatch(setCurrentQuery(suggestion));
                setShowSuggestions(false);
              }}
            >
              <Sparkles size={16} className="text-blue-500" />
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}