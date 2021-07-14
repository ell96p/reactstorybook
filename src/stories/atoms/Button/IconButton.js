import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../theme/MainTheme';

const ButtonContainer = styled.button`
padding: 0;
background-color: ${({
                                                               color,
                                                               variant,
                                                           }) => {
    if (variant === 'contained') {
        if(color === 'primary') {return theme.color.primary
        }if (color==='secondary'){return theme.color.secondary}
    } return theme.color.tertiary;
}};
color: ${({active}) => (active ? theme.color.active : theme.color.textColor)};
  display: block;
  border-radius: 20px;
  height: 50px;
  width: 120px;
  margin-left: 30px;
  margin-bottom: 10px;
font-family: Montserrat,sans-serif;
font-weight: 600;border: none;
font-size: 12px;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 5px 6px 6px;
  
&:hover * {
    transition: color 200ms ease;
    color: ${theme.color.active};
  }   
    `;

const IconBox = styled.span`
  transition: color 250ms ease-in-out;
  height: 100px;
  color: ${({
                                            active,
                                        }) => {
    if (active) {
        return theme.color.active;
    }
    return theme.color.textColor;
}};
`;

const Label = styled.span`
  transition: color 300ms ease-in-out;
`;

const IconButton = ({

                        color,
                        variant,
                        icon,
                        label,
                        active,
                        ...props
                    }) => (
    <ButtonContainer
        color={color}
        variant={variant}
        active={active}
        {...props}
    >
        <IconBox
            color={color}
            variant={variant}
            active={active}
        >
            {icon}
        </IconBox>
        <Label>
            {label}
        </Label>
    </ButtonContainer>

);

IconButton.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    variant: PropTypes.oneOf(['outlined', 'contained']),
    icon: PropTypes.element,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

IconButton.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    active: false,
    onClick: undefined,
};

export default IconButton;
