import React from 'react';
import theme from "../../../theme/MainTheme";
import Heading from './Heading';

export default {
    title: 'Atoms/Heading',
    component: Heading,
    argTypes: {
        title: {
            control: 'text',
            defaultValue: 'Header Table',
        },
    },
};

export const HeadingStory = (args) =>{
    const {title}= args;

    return (
            <Heading
                         title={title}
                         theme={theme}
            />
    )

    const Template = (args) => <Heading {...args} />;
}