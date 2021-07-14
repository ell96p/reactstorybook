import React from 'react';
import Card from "./Card";

export default {
    title: 'Molecules/Card',
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    cardType: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
    cardType: 'secondary',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    cardType: 'tertiary',
};
