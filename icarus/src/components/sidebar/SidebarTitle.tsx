import React from 'react';
import styled from "styled-components";

export interface SidebarTitleProps {
    title: string;
}

const SidebarTitleStyle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const SidebarTitle: React.FC<SidebarTitleProps> = (props: SidebarTitleProps) => {
    return <SidebarTitleStyle>
        {props.title}
    </SidebarTitleStyle>
}

export default SidebarTitle;
