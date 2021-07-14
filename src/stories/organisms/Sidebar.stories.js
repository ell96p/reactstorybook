import React from 'react';
import Sidebar from "./Sidebar";
import StoryRouter from 'storybook-react-router'

export default {
    title: 'Organisms/Sidebar',
    component: Sidebar,
    decorators: [StoryRouter()],
};

const Template = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    color: 'tertiary',
};
