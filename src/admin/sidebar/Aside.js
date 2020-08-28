import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaUserGraduate } from 'react-icons/fa';
import sidebarBg from './assets/bg1.jpg';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Admin Dashboard
        </div>
      </SidebarHeader>

      <SidebarContent>
        
        <Menu iconShape="circle">
          
          <SubMenu
            
            title="Etudiants"
            icon={<FaUserGraduate />}
          >
            <MenuItem>Approved</MenuItem>
            <MenuItem>Requests</MenuItem>
          </SubMenu>
           
        </Menu>
      </SidebarContent>

      
    </ProSidebar>
  );
};

export default Aside;
