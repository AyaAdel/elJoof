import React, { useState } from "react";
import { Tabs, Form } from "antd";

import SearchTab from "./SearchTab";
import SearchResults from "./SearchResults";
import SearchContinue from "./SearchContinue";
import AdvancedSearch from "./AdvancedSearch";
import AdvancedSearchContinue from './AdvancedSearchContinue';

import "./style.css";

const { TabPane } = Tabs;

function Search() {
  const [displaySection, setDisplaySection] = useState<boolean>(true);
  const [displaySearchContinue, setDisplaySearchContinue] = useState<boolean>(true);
  const [displaySearchResults, setDisplaySearchResults] = useState<boolean>(true);
  const [displayAdvancedSearchContinue, setDisplayAdvancedSearchContinue] = useState<boolean>(true);
  const [form] = Form.useForm();

  const callbackSearch = (callback: boolean) => {
    setDisplaySection(callback);
    setDisplaySearchContinue(callback);
  };

  const callbackSearchResult = (callback: boolean) => setDisplaySearchResults(callback);

  const callbackAdvancedSearchContiue = (callback: boolean) => {
    setDisplaySection(callback);
    setDisplayAdvancedSearchContinue(callback);}

  const onFinish = (values: any) => {
    setDisplaySearchContinue(true);
    setDisplaySearchResults(false);
    setDisplayAdvancedSearchContinue(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="search-wrapper">
      <Tabs defaultActiveKey="search">
        <TabPane tab="بحث" key="search">
          <Form
            name="search"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <SearchTab handleSearchTab={callbackSearch} sendDisplaySection={displaySection} />
            <SearchContinue handleSearchTab={callbackSearch} sendSearchContinue={displaySearchContinue} />
          </Form>
          <SearchResults
            handleSearchResults={callbackSearchResult}
            handlecallbackSearch={callbackSearch}
            sendDisplaySection={displaySearchResults} backSearch
          />
        </TabPane>
        <TabPane tab="بحث متقدم" key="advanced-search">
          <Form
            name="advanced-search"
            layout="vertical"
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <AdvancedSearch form={form} handleCallbackAdvancedSearch={callbackAdvancedSearchContiue} sendAdvancedSearch={displaySection} />
            <AdvancedSearchContinue sendAdvancedSearchContinue={displayAdvancedSearchContinue} handlecallbackAdvancedSearchContiue={callbackAdvancedSearchContiue} />
            <SearchResults handleSearchResults={callbackSearchResult}
            handlecallbackSearch={callbackSearch} sendDisplaySection={displaySearchResults} handlecallbackAdvancedSearchContiue={callbackAdvancedSearchContiue}  backAdvancedSearch />
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Search;
