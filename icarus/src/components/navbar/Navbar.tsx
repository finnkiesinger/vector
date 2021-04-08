import React from 'react';
import styled from 'styled-components';
import ROUTES, {navigate} from "../../utils/routes";

export interface NavbarProps {
    title: string;
    user: {
        firstName: string;
        lastName: string;
        username: string;
    };
}

const NavbarStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #dddddd;
  padding: 0 1rem;
  background: white;
  z-index: 1000000;
`;

const NavbarTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
`;

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {

    return <NavbarStyle>
        <NavbarTitle onClick={navigate(ROUTES.HOME)}>
            {props.title}
        </NavbarTitle>
        <div>
            {props.user.username}
        </div>
    </NavbarStyle>
}

export default Navbar;
