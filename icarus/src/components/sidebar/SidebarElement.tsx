import React from 'react';
import styled from 'styled-components';

export interface SidebarElementProps {
    title: string;
    onClick?: () => void;
    tint?: string;
}

const SidebarElementStyle = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem;
  height: 40px;
  margin: 0 .25rem;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  transition: .1s;
  &:active {
    transform: scale(.98);
  }
  &:hover {
    background: #efefef;
  }
`;

const SidebarElement: React.FC<SidebarElementProps> = (props: SidebarElementProps) => {
    return <SidebarElementStyle {...props}>
        {props.title}
    </SidebarElementStyle>
}

export default SidebarElement;
