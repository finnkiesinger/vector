import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../utils/color_utilities';
export interface OutlineButtonProps {
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
     * Border Color
     */
    borderColor?: string;
    /**
     * Font Color
     */
    color?: string;
}

const OutlineButtonStyle = styled.button`
    appearance: none;
    border: 2px solid ${(props: OutlineButtonProps) => props.borderColor || PRIMARY};
    border-radius: ${props => props.rounded ? "4px" : "12px"};
    height: 45px;
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: bold;
    border: none; 
    cursor: pointer;
    transition: .1s;
    &:hover {
        background: rgba(0,0,0,0.05);
    }
    &:focus {
        outline: none;
        background: rgba(0,0,0,0.05);
    }
    &:active {
        transform: scale(0.97);
    }
`;

const OutlineButton: React.FC<OutlineButtonProps> = (props: OutlineButtonProps) => {
    return <OutlineButtonStyle {...props}>
        {props.title}
    </OutlineButtonStyle>
}

export default OutlineButton