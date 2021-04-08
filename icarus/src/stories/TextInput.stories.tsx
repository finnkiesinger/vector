import React from 'react';
import {Story, Meta} from '@storybook/react';
import TextInput, {TextInputProps} from "../components/inputs/TextInput";

export default {
    title: "Input/TextInput",
    component: TextInput
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Input = Template.bind({});
Input.args = {
    placeholder: "Text Input...",
    type: "text"
};
