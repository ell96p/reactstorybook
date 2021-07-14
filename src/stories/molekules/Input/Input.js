import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
padding: 15px 30px;
font-size: ${({ theme }) => theme.fontSize.s};
font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.color.grey200};
  border: none;
  border-radius: 50px;
  
  ::placeholder{
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
    
  }
`;

const SearchInput = ({ placeholder, value, onChange }) => (
    <>
        <Input
            placeholder = {placeholder}
            value={value}
            onChange={(e)=> onChange(e.target.value)}
        />
    </>
)

SearchInput.propTypes= {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchInput;