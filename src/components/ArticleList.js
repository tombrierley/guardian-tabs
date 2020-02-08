import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import isArrayWithLength from '../utils/isArrayWithLength';

const List = styled.ul``;

const ListItem = styled.li``;

const ArticleList = ({ content }) => {
  return (
    <List>
      {isArrayWithLength(content) ? (
        content.map(({ id, webUrl, webTitle, trailText }) => (
          <ListItem key={id}>
            <a href={webUrl} target="_blank" rel="noopener noreferrer">
              {webTitle}
            </a>
            <p>{trailText}</p>
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
