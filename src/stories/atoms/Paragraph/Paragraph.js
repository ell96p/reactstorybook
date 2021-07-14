import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Paragraph = ({ text }) => (
    <>
        <Text>{text}</Text>
    </>
);

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Paragraph;