import React from "react";
import styled, {css} from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import IconButton from "../../atoms/Button/IconButton";
import link from '../../../assets/link.svg';
import theme from "../../../theme/MainTheme";
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30pc -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 50px;
  min-height: 300px;
  overflow: hidden;
  position: relative;
display: block;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  position: relative;
  :first-of-type {
    z-index: 999999;
  }
  
    background-color: ${({
                        activeColor
                      }) => {
    if (activeColor === 'primary') {
        return  theme.color.primary;
    } else if(activeColor === 'tertiary') {return theme.color.tertiary}
    return theme.color.secondary
        
    }
  }
};

  ${({ flex }) =>
          flex &&
          css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
`;

const ParagraphWrapper = styled.div`
  padding: 17px 30px;
  border-radius: 20px 20px 0 0;
  margin-bottom: 0;
`;

const StyledHeading = styled(Heading)`
margin: 5px 0 0;
`;

const DateInfo = styled(Paragraph)`
  font-weight: bold;
  margin-top: 0;
`;

const StyledLinkButton = styled.a`
  display: block;
  float: right;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: lightpink url(${link});
`;

const title='Hello this is headingkkkk';
const text =' this ddddddddddddddddddddddidddddddddddddds text dddd ddddddddddddddddddddddddddthis card!!'

const Card = ({ cardType }) => (
    <StyledWrapper flex>
        <InnerWrapper activeColor={cardType}>
        <StyledHeading title={title} />
            <DateInfo text={'3 days'}/>
            <StyledLinkButton />
        </InnerWrapper>
        <ParagraphWrapper flex>
        <Paragraph text={text} />
        <IconButton color={cardType} label={'REMOVE'} />
        </ParagraphWrapper>
    </StyledWrapper>
)
Card.propTypes = {
    cardType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}
Card.defaultProps = {
  cardType: 'icecream',
};

export default Card;