import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

import { searchContent } from '../utils/api';

const TabbedContent = () => {
  // This could quite easily sit within Redux or Apollo but defining it as component state here
  const [tabContent, setTabContent] = useState({
    isFetching: false,
    content: null,
    error: false,
    errorMessage: null,
  });

  const [activeTab, setActiveTab] = useState('uk-news');

  const handleFetching = () => {
    setTabContent({
      isFetching: true,
      content: null,
      error: false,
      errorMessage: null,
    });
  };

  const handleFetchSuccess = data => {
    setTabContent({
      isFetching: false,
      content: data,
      error: false,
      errorMessage: null,
    });
  };

  const handleFetchError = () => {
    setTabContent({
      isFetching: false,
      content: null,
      error: true,
      errorMessage:
        'There has been a problem fetching content, please try again later/', // TODO: Parse this message from the API response
    });
  };

  // Fetch content from API
  const fetchContent = options => {
    searchContent({
      onFetching: handleFetching,
      onSuccess: handleFetchSuccess,
      onError: handleFetchError,
      ...options,
    });
  };

  // Get Initial Content - Renders only on mount
  // TODO: Update eslint config so I don't have to disable that line below
  useEffect(() => {
    fetchContent({ sectionId: activeTab });
  }, []); // eslint-disable-line

  return (
    <Layout title="Tabbed Content Example">
      {tabContent && JSON.stringify(tabContent)}
    </Layout>
  );
};

export default TabbedContent;
