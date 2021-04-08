import React from 'react';
import styled from 'styled-components';

export interface SidebarProps {
    children?: React.ReactNode;
}

const SidebarStyle = styled.div`
  position: fixed;
  overflow: auto;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 300px;
  padding: .5rem 0;
  border-right: 1px solid #dddddd;
  background: white;
  z-index: 999999;
`;

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    return <SidebarStyle {...props} />
}

export default Sidebar;
