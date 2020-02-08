import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PropagateLoader from 'react-spinners/PropagateLoader';

import ArticleList from './ArticleList';

const TabPanel = styled.div``;

const TabContent = ({ panelId, id, isFetching, activeTab, ...props }) => {
  const isActive = id === activeTab;
  return (
    <TabPanel
      id={panelId}
      role="tabpanel"
      tabindex="0"
      aria-labelledby={id}
      hidden={!isActive}
    >
      {isFetching || !isActive ? (
        <PropagateLoader />
      ) : (
        <ArticleList {...props} />
      )}
    </TabPanel>
  );
};

TabContent.propTypes = {
  id: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  panelId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default TabContent;
