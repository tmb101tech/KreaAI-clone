"use client"

import { useTheme } from 'next-themes';

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className="border-t border-border/30 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-600 rounded-sm"></div>
            <span className="font-medium text-sm text-white">Krea AI</span>
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <span>curated by</span>
            <div className="flex items-center space-x-1 font-medium text-white">
              <div className="w-4 h-4 rounded-sm bg-white"></div>
              <span>Mobbin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}