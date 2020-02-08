import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.grey100};
  border-bottom: solid 3px ${props => props.theme.colors.grey100};
  display: block;
  flex: 1 1 ${(1 / 3) * 100}%;
  padding: ${props => props.theme.spacing.small};
  width: ${(1 / 3) * 100}%;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.blue500};
  }

  ${props =>
    props.isActive &&
    `
    background-color: transparent;
    border-color: ${props.theme.colors.blue500};
  `}
`;

const TabButton = ({ id, activeTab, panelId, first, title, onTabChange }) => {
  const handleTabChange = () => {
    onTabChange(id);
  };

  const isActive = id === activeTab;

  return (
    <Button
      role="tab"
      aria-selected={isActive ? 'true' : 'false'}
      aria-controls={panelId}
      id={id}
      tabindex={first ? '0' : '-1'}
      onClick={handleTabChange}
      isActive={isActive}
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
