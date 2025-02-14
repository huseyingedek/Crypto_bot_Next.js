import React, { useState } from 'react';
import { Search, Notifications, Person, ExitToApp, LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '@/Context/ThemeContext';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`fixed top-0 left-[240px] right-0 h-16 ${isDarkMode ? 'bg-gray-900 text-white border-gray-800' : 'bg-white text-gray-800 border-gray-200'} border-b z-50`}>
      <div className="h-full flex items-center justify-between px-6">
        <div className="text-xl font-bold">
          CryptoTrader
        </div>

        <div className={`flex items-center rounded-lg px-3 py-1.5 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <Search className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-2`} />
          <input
            type="text"
            placeholder="Coin Ara..."
            className={`bg-transparent outline-none w-64 ${isDarkMode ? 'text-gray-300 placeholder-gray-500' : 'text-gray-700 placeholder-gray-400'}`}
          />
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
          >
            {isDarkMode ? (
              <LightMode className="text-yellow-400" />
            ) : (
              <DarkMode className="text-gray-600" />
            )}
          </button>

          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <div className="relative">
                <Notifications className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </div>
            </button>

            {showNotifications && (
              <div className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg py-2 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border`}>
                <div className={`px-4 py-2 cursor-pointer ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}>
                  <div className="text-sm">BTC %2 yükseldi</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>5 dakika önce</div>
                </div>
                <div className={`px-4 py-2 cursor-pointer ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}>
                  <div className="text-sm">Yeni işlem gerçekleşti</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>10 dakika önce</div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <Person />
              </div>
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>John Doe</span>
            </button>

            {showMenu && (
              <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-2 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border`}>
                <button className={`w-full px-4 py-2 text-left flex items-center gap-2 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
                  <Person className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Profil</span>
                </button>
                <button className={`w-full px-4 py-2 text-left flex items-center gap-2 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
                  <ExitToApp className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Çıkış Yap</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;