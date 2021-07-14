import React, { useState } from 'react';
import SearchInput from "./Input";
import theme from "../../../theme/MainTheme";

export default {
    title: 'Molecules/QuickSearchInput',
    component: SearchInput,
    argTypes: {
        placeholder: {
            defaultValue: 'Quick search...'
        }
    }
};

export const Search = (args) => {
    const { placeholder } = args;

    const [input, setInput] = useState('');

    return (
        <div style={{width: '50%'}}>
            <SearchInput placeholder={placeholder}
                         onChange={setInput}
                         value={input}
                         theme={theme}
            />
        </div>
    )
}