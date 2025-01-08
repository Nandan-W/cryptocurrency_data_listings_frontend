import React from 'react';
import { Download } from 'lucide-react';
import { format } from 'date-fns';
import { CryptoData } from '../types/crypto';

interface CryptoTableProps {
  data: CryptoData[] | undefined;
  lastUpdated: Date | null;
  isStale: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const CryptoTable: React.FC<CryptoTableProps> = ({
  data,
  lastUpdated,
  isStale,
  currentPage,
  setCurrentPage,
}) => {

  

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let totalPages = 0;
  let currentData: CryptoData[] = [];

  console.log("data received = ",data);
  if( data )
    console.log("data length = ",data.length);

  if( data && data.length > 0){
    totalPages = Math.ceil(data.length / itemsPerPage);
    currentData = data.slice(startIndex, endIndex);
  }
  

  const downloadCSV = () => {
    if (!data || data.length === 0) 
      return;
    const headers = ['Name,Symbol,Price (USD),Market Cap,24h Volume,24h Change %'];
    const csvData = data.map(crypto => 
      `${crypto.name},${crypto.symbol},${crypto.current_price},${crypto.market_cap},${crypto.volume_24h},${crypto.price_change_24h}`
    );
    const csvContent = [headers, ...csvData].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `crypto-data-${format(new Date(), 'yyyy-MM-dd-HH-mm')}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">
            Last updated: {lastUpdated ? format(lastUpdated, 'PPpp') : 'Never'}
          </p>
          {isStale && (
            <p className="text-red-500 text-sm mt-1">
              Warning: Data may not be current. Using last available data.
            </p>
          )}
        </div>
        <button
          onClick={downloadCSV}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Download className="h-4 w-4" />
          <span>Download CSV</span>
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price (USD)</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">24h Volume</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            { data ? (
              currentData.length > 0 &&
              currentData.map((crypto, index) => (
                <tr key={crypto.symbol} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{crypto.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{crypto.symbol.toUpperCase()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    ${crypto.current_price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    ${crypto.market_cap.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    ${crypto.volume_24h.toLocaleString()}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                    crypto.price_change_24h >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {crypto.price_change_24h.toFixed(2)}%
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                  No data available
                </td>
              </tr>
              )
          }
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Showing {startIndex + 1} to {Math.min(endIndex, data ? data.length : 0)} of {data ? data.length : 0} results 
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;