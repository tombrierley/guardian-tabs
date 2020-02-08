import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button``;

const TabButton = ({ id, activeTab, panelId, first, title, onTabChange }) => {
  const handleTabChange = () => {
    onTabChange(id);
  };

  return (
    <Button
      role="tab"
      aria-selected={id === activeTab ? 'true' : 'false'}
      aria-controls={panelId}
      id={id}
      tabindex={first ? '0' : '-1'}
      onClick={handleTabChange}
    >
      {title}
    </Button>
  );
};

TabButton.propTypes = {
  id: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  panelId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  first: PropTypes.bool,
  onTabChange: PropTypes.func.isRequired,
};

TabButton.defaultProps = {
  first: false,
};

export default TabButton;
