import React from 'react';
import theme from "../../../theme/MainTheme";
import Paragraph from "./Paragraph";

export default {
    title: 'Atoms/Paragraph',
    component: Paragraph,
    argTypes: {
        text: {
            control: 'text',
            defaultValue: 'Text',
        },
    },
};

export const ParagraphStory = (args) => {
    const {text} = args;

    return (
        <Paragraph
            text={text}
            theme={theme}
        />
    )
}