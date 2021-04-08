import React, { forwardRef } from "react";
import Color from 'color';
import styled from "styled-components";
import {PRIMARY} from "../../utils/color_utilities";

export interface TextInputProps {
  /**
   * Value of the input
   */
  value?: string;
  /**
   * Action performed on change
   */
  onChange?: () => void;
  /**
   * Placeholder of input
   */
  placeholder?: string;
  /**
   * Type of input: Text, Password, Email, etc.
   */
  type?: string;
  /**
   * Font and Border Color
   */
  tint?: string;
}

export type Ref = HTMLInputElement;

const TextInputStyle = styled.input`
  appearance: none;
  border: 2px solid ${(props: TextInputProps) => props.tint  || PRIMARY};
  border-radius: 12px;
  color: ${props => props.tint  || PRIMARY};
  padding: 0 .5rem;
  font-weight: 500;
  height: 40px;
  font-size: 1rem;
  &::placeholder {
    color: ${props => props.tint ? Color(props.tint).lighten(0.1).hex() : Color(PRIMARY).lighten(0.1).hex()}
  }
  &:focus {
    outline: none;
  }
`;

const TextInput: React.FC<TextInputProps> = forwardRef<Ref, TextInputProps>(
    (props: TextInputProps, ref) => {
      return <TextInputStyle ref={ref} {...props} />;
    }
);

export default TextInput;
