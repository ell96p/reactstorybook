import React from 'react';
import { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';
import  theme  from '../../theme/MainTheme'
import GlobalStyles from "../../theme/GlobalStyles";

const MainTemplate = ({children}) => (
    <div>
        <GlobalStyles />

        <ThemeProvider theme ={theme}>
            <>
            {children}
            </>
        </ThemeProvider>
    </div>
)

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
}
export default MainTemplate;