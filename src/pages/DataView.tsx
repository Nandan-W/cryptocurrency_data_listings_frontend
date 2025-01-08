import React, { useState, useEffect } from 'react';
import CryptoTable from '../components/CryptoTable';
import { CryptoData } from '../types/crypto';
import { set } from 'date-fns';

const DataView = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isStale, setIsStale] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/crypto-data');
        const result = await response.json();

        console.log("received data in data view.tsx = " , result);

        const data = result.data;
        const dataTimestamp = result.timestamp;
        
        if (!data || data.error  || data.length === 0) {
          setIsStale(true);
          setCryptoData([]);
        } 
        else {
          setCryptoData(data);
          setLastUpdated(dataTimestamp);
          setIsStale(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsStale(true);
        setCryptoData([]);
      }
    };

    
    // Set up polling every 5 minutes
    // const interval = setInterval(fetchData, 5 * 60 * 1000);

    // return () => clearInterval(interval);
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cryptocurrency Market Data</h1>
      <CryptoTable
        data={cryptoData}
        lastUpdated={lastUpdated}
        isStale={isStale}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default DataView;