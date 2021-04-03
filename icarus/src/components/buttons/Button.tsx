import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { PRIMARY } from '../../utils/color_utilities';

export interface ButtonProps {
    /**
     * Title of the button
     */
    title: string;
    /**
     * Action performed when clicked
     */
    onClick: () => void;
    /**
     * Should corners be rounded?
     */
    rounded?: boolean;
    /**
     * Background Color
     */
    backgroundColor?: string;
    /**
     * Font Color
     */
    color?: string;
}

const ButtonStyled = styled.button`
    appearance: none;
    border-radius: ${(props: ButtonProps) => props.rounded ? "4px" : "12px"};
    background-color: ${props => props.backgroundColor || PRIMARY};
    color: ${props => props.color || "#FFFFFF"};
    height: 45px;
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: bold;
    border: none; 
    cursor: pointer;
    transition: .1s;
    &:hover {
        background: ${props => props.backgroundColor ? Color(props.backgroundColor).darken(0.05).hex() : Color(PRIMARY).darken(0.05).hex()};
    }
    &:focus {
        outline: none;
        background: ${props => props.backgroundColor ? Color(props.backgroundColor).darken(0.05).hex() : Color(PRIMARY).darken(0.05).hex()};
    }
    &:active {
        transform: scale(0.97);
    }
`;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <ButtonStyled {...props}>
        {props.title}
    </ButtonStyled>
}

export default Button;
