import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../organisms/Sidebar";
import styled from "styled-components";
import Heading from "../atoms/Heading/Heading";
import Paragraph from "../atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`

`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin-left: 15%;
  margin-right: 2%;
`;


const StyledPageHeader=styled.div`
`;

const PageTemplate = ({children, pageType, color}) => (
    <>
        <Sidebar pageType = {pageType} color={'secondary'}/>
        <StyledWrapper>
            <StyledPageHeader>
            <Heading title={"Notes"}/>
            <Paragraph text={"Notes"}/>
            </StyledPageHeader>
           <StyledGrid>{children}</StyledGrid>
        </StyledWrapper>
    </>
);

PageTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    pageType: PropTypes.oneOf(['primary', 'secondary'])
};

PageTemplate.defaultProps = {
    pageType: 'primary'
}

export default PageTemplate;