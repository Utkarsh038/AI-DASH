import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsDisplay from './components/ResultsDisplay';
import { BarChart2 } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50">
        <nav className="glass-effect sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-3">
                <BarChart2 className="h-8 w-8 text-blue-600" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Gen AI Analytics
                </h1>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center mb-8">
            <QueryInput />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
            <QueryHistory />
            </div>
            <div className="lg:col-span-3">             
              
              <ResultsDisplay />
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;