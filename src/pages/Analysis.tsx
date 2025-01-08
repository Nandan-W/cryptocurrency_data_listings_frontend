import React, { useState, useEffect } from 'react';
import { CryptoAnalysis } from '../types/crypto';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const Analysis = () => {
  const [analysis, setAnalysis] = useState<CryptoAnalysis | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/crypto-analysis`);
        const result = await response.json();
        
        const data = result.data;
        const dataTimestamp = result.timestamp;

        if (!data.error) {
          setAnalysis(data);
          setLastUpdated(dataTimestamp);
        }
      } catch (error) {
        console.error('Error fetching analysis:', error);
      }
    };

    fetchAnalysis();
    const interval = setInterval(fetchAnalysis, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!analysis) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">Loading analysis...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Market Analysis</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <DollarSign className="h-5 w-5 text-green-600 mr-2" />
            Top 5 by Market Cap
          </h2>
          <div className="space-y-4">
            {analysis.top_5_by_market_cap.map((crypto, index) => (
              <div key={crypto.symbol} className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-gray-500 w-6">{index + 1}.</span>
                  <span className="font-medium">{crypto.name}</span>
                  <span className="text-gray-500 ml-2">({crypto.symbol.toUpperCase()})</span>
                </div>
                <span className="text-gray-900">${crypto.market_cap.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Average Price (Top 50)</h2>
          <div className="text-3xl font-bold text-gray-900">
            ${analysis.average_price_top_50.toLocaleString()}
          </div>
          <p className="text-gray-600 mt-2">
            Average price among the top 50 cryptocurrencies
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
            Highest 24h Change
          </h2>
          <div className="text-2xl font-bold text-green-600">
            {analysis.highest_24h_change.change.toFixed(2)}%
          </div>
          <p className="text-gray-600 mt-2">
            {analysis.highest_24h_change.name}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingDown className="h-5 w-5 text-red-600 mr-2" />
            Lowest 24h Change
          </h2>
          <div className="text-2xl font-bold text-red-600">
            {analysis.lowest_24h_change.change.toFixed(2)}%
          </div>
          <p className="text-gray-600 mt-2">
            {analysis.lowest_24h_change.name}
          </p>
        </div>
      </div>

      {lastUpdated && (
        <p className="text-sm text-gray-600 mt-8">
          Last updated (GMT): {lastUpdated.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default Analysis;