import React from 'react';
import { TrendingUp, Clock, Database } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Real-Time Cryptocurrency Tracking
        </h1>
        <p className="text-xl text-gray-600">
          Stay informed with up-to-date cryptocurrency market data and insights
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Live Market Data</h3>
          <p className="text-gray-600">
            Access real-time cryptocurrency prices, market caps, and trading volumes
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <Clock className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">5-Minute Updates</h3>
          <p className="text-gray-600">
            Data refreshed every 5 minutes to ensure you have the latest market information
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <Database className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
          <p className="text-gray-600">
            Comprehensive market analysis and insights for informed decision-making
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <img
          src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80"
          alt="Cryptocurrency visualization"
          className="rounded-lg shadow-xl mx-auto mb-8"
        />
      </div>
    </div>
  );
};

export default Home;