import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  border-radius: 20px 20px 0 0;
`;

const Title = styled.div`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.black};
`;

const Heading = ({
                     title,
                }) => (

    <Container>
        <Title>{title}</Title>
    </Container>
);


Heading.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Heading;