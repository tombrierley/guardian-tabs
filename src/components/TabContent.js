import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PropagateLoader from 'react-spinners/PropagateLoader';

import ArticleList from './ArticleList';

const TabPanel = styled.div`
  min-height: 220px;
  padding: ${props => props.theme.spacing.base} 0;
  position: relative;
`;

const Loader = styled.div`
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
`;

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
        <Loader>
          <PropagateLoader />
        </Loader>
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
