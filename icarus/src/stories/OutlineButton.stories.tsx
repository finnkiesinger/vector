import React from 'react';
import {Story, Meta} from '@storybook/react';
import OutlineButton, {OutlineButtonProps} from '../components/buttons/OutlineButton';

export default {
    title: "Button/OutlineButton",
    component: OutlineButton,
} as Meta;

const Template: Story<OutlineButtonProps> = (args) => <OutlineButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Button",
    onClick: () => {}
};