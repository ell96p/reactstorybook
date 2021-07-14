import React from 'react';
import { ReactComponent as IconIceCream } from '../../../assets/ice-cream.svg';
import IconButton from './IconButton';

export default {
    title: 'Atoms/IconButton',
    component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    label: 'icon button',
    icon: <IconIceCream />,
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    label: 'icon button',
    icon: <IconIceCream />,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    color: 'tertiary',
    label: 'icon button',
    icon: <IconIceCream />,
};
