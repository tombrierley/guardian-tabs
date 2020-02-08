import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tag from './Tag';

import isArrayWithLength from '../utils/isArrayWithLength';

const List = styled.ul``;

const ListItem = styled.li`
  align-items: center;
  display: flex;
  padding: ${props => props.theme.spacing.xSmall} 0;

  a {
    color: ${props => props.theme.colors.grey500};
    flex: 1 1 auto;
    text-decoration: none;

    &:hover,
    &:focus {
      // TODO: Nicer hover state here
      text-decoration: underline;
    }
  }
`;

const Number = styled.span`
  color: ${props => props.theme.colors.blue500};
  display: block;
  font-size: ${props => props.theme.fontSizes.xxLarge};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-right: ${props => props.theme.spacing.base};
`;

const EndContent = styled.div`
  margin-left: ${props => props.theme.spacing.base};
`;

const ArticleList = ({ content }) => {
  return (
    <List>
      {isArrayWithLength(content) ? (
        content.map(({ id, webUrl, webTitle, type }, i) => (
          <ListItem key={id}>
            <Number>{i + 1}.</Number>

            <a href={webUrl} target="_blank" rel="noopener noreferrer">
              {webTitle}
            </a>

            <EndContent>
              <Tag type={type} />
            </EndContent>
          </ListItem>
        ))
      ) : (
        <p>No articles</p>
      )}
    </List>
  );
};

ArticleList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({})), // TODO: Configure this proptype and make it reusable across components
};

ArticleList.defaultProps = {
  content: null,
};

export default ArticleList;
