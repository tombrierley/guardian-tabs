import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: ${props => props.theme.spacing.base};
  background-color: ${props => props.theme.colors.grey100};
  font-size: ${props => props.theme.fontSizes.xxSmall};
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.1rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.xSmall};
  color: ${props => props.theme.colors.grey500};

  ${props =>
    props.type === 'liveblog' &&
    `
     background-color: ${props.theme.colors.green500};
     color:  ${props.theme.colors.white};
  `}
`;

const Tag = ({ type }) => {
  return <Wrapper type={type}>{type}</Wrapper>;
};

Tag.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Tag;
