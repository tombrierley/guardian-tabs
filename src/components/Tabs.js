import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TabContent from './TabContent';
import TabButton from './TabButton';

import isArrayWithLength from '../utils/isArrayWithLength';

const TabList = styled.div`
  display: flex;
  border-bottom: solid 1px ${props => props.theme.colors.grey100};
`;

const Tabs = ({ label, tabs, ...props }) => {
  // TODO: Add accessible tab event listener here E.g. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role

  return (
    <div>
      {isArrayWithLength(tabs) ? (
        <>
          <TabList role="tablist" aria-label={label}>
            {tabs.map((tab, i) => (
              <TabButton key={tab.id} first={i === 0} {...props} {...tab} />
            ))}
          </TabList>

          {tabs.map(tab => (
            <TabContent key={tab.id} {...props} {...tab} />
          ))}
        </>
      ) : (
        <p>No tabs have been configured</p>
      )}
    </div>
  );
};

Tabs.propTypes = {
  label: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({})).isRequired, // TODO: Configure this proptype and make it reusable across components
};

export default Tabs;
