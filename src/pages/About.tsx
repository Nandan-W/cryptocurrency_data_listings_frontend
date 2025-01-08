import React from 'react';
import { Code, Server, LineChart } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About CryptoTracker</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
          <p className="text-gray-600 mb-6">
            CryptoTracker is a real-time cryptocurrency tracking platform that provides
            up-to-date market data and analysis. The platform combines powerful backend
            processing with an intuitive frontend interface to deliver a seamless
            user experience.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Server className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Backend</h4>
                  <p className="text-gray-600">Python, Flask, RESTful APIs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Code className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Frontend</h4>
                  <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <LineChart className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Data Analysis</h4>
                  <p className="text-gray-600">Real-time processing, Market analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Real-time cryptocurrency market data</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Automatic 5-minute data updates</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Comprehensive market analysis</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>CSV data export functionality</span>
            </li>
            
            <li className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Top cryptocurrency rankings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;