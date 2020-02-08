import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

import Tabs from '../components/Tabs';

import { searchContent } from '../utils/api';

const tabs = [
  {
    id: 'uk-news',
    panelId: 'panel-uk-news',
    title: 'UK News',
  },
  {
    id: 'football',
    panelId: 'panel-football',
    title: 'Football',
  },
  {
    id: 'travel',
    panelId: 'panel-travel',
    title: 'Travel',
  },
];

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

  const handleTabChange = id => {
    // Update the active tab id
    setActiveTab(id);

    // Refetch the content
    fetchContent({ sectionId: id });
  };

  // Get Initial Content - Renders only on mount
  // TODO: Update eslint config so I don't have to disable that line below
  useEffect(() => {
    fetchContent({ sectionId: activeTab });
  }, []); // eslint-disable-line

  return (
    <Layout title="Tabbed Content Example">
      <Tabs
        label="Articles from the Guardian"
        tabs={tabs}
        activeTab={activeTab}
        content={tabContent.content}
        isFetching={tabContent.isFetching}
        onTabChange={handleTabChange}
      />
    </Layout>
  );
};

export default TabbedContent;
