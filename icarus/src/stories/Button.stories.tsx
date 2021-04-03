import React from 'react';
import {Story, Meta} from '@storybook/react';
import Button, {ButtonProps} from '../components/buttons/Button';
import { PRIMARY, SECONDARY } from '../utils/color_utilities';

export default {
    title: "Button/FilledButton",
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Button",
    onClick: () => {}
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: "Button",
    onClick: () => {},
    backgroundColor: SECONDARY,
    color: PRIMARY,
}
