import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Container from '../styles/Container';

const Main = styled.main`
  background-color: ${props => props.theme.colors.grey100};
  width: 100%;
`;

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>

      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Layout.defaultProps = {
  description: null,
};

export default Layout;
