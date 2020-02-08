import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TabContent from './TabContent';
import TabButton from './TabButton';

import isArrayWithLength from '../utils/isArrayWithLength';

const TabList = styled.div``;

const TabWrapper = styled.div``;

const Tabs = ({ label, tabs, ...props }) => {
  return (
    <TabWrapper>
      {isArrayWithLength(tabs) ? (
        <>
          <TabList role="tablist" aria-label={label}>
            {tabs.map((tab, i) => (
              <TabButton key={tab.id} first={i === 0} {...props} {...tab} />
            ))}
          </TabList>

          {tabs.map((tab, i) => (
            <TabContent key={tab.id} {...props} {...tab} />
          ))}
        </>
      ) : (
        <p>No tabs have been configured</p>
      )}
    </TabWrapper>
  );
};

Tabs.propTypes = {
  label: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({})).isRequired, // TODO: Configure this proptype and make it reusable across components
};

export default Tabs;
