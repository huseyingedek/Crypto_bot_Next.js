import React, { useState } from 'react';
import { Drawer, Toolbar } from '@mui/material';
import SidebarMenu from './SiderbarMenu';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ display: 'flex' }}>
      <Header />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <SidebarMenu />
      </Drawer>
      <div style={{
        flexGrow: 1,
        padding: '24px',
        width: `calc(100% - ${drawerWidth}px)`
      }}>
        <Toolbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;