import React from 'react';
import { Dashboard, ShowChart, AccountBalanceWallet, Settings } from '@mui/icons-material';
import Link from 'next/link';
import { useTheme } from '@/Context/ThemeContext';

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/' },
  { text: 'Markets', icon: <ShowChart />, path: '/markets' },
  { text: 'Wallet', icon: <AccountBalanceWallet />, path: '/wallet' },
  { text: 'Settings', icon: <Settings />, path: '/settings' }
];

const SidebarMenu = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`fixed left-0 top-0 h-full w-[240px] ${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } border-r`}>
      <div className="h-16 flex items-center px-6 border-b border-inherit">
        <h2 className={`text-xl font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          CryptoTrader
        </h2>
      </div>

      <div className="py-4">
        {menuItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`flex items-center gap-3 px-6 py-3 mx-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'text-gray-300 hover:bg-gray-800' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
              {item.icon}
            </div>
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;