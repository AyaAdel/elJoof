import React from "react";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { ArrowRightOutlined } from "@ant-design/icons";

type Result = {
  key: number;
  city: string;
  name: string;
  data: string;
};

const columns: ColumnsType<Result> = [
  {
    title: "محافظة - مدينة - حى",
    dataIndex: "city",
    key: "city",
    align: "right",
  },
  {
    title: "المؤشر",
    dataIndex: "name",
    key: "name",
    align: "right",
  },
  {
    title: "قيمة المؤشر",
    dataIndex: "data",
    key: "data",
    align: "right",
  },
];

const dataSource = [
  {
    key: 1,
    city: "محافظة بريدة - بريدة",
    name: "السكان حسب الجنسية (سعودى)",
    data: "68.69 عدد , (1437 هـ)",
  },
  {
    key: 2,
    city: "محافظة الرس - الرس",
    name: "السكان حسب الجنسية (سعودى)",
    data: "72.092 عدد , (1437 هـ)",
  },
];

type Iprops = {
  sendDisplaySection?: boolean;
  handleSearchResults?: boolean | any;
  handlecallbackSearch?: boolean | any;
  backSearch?: boolean;
  backAdvancedSearch?: boolean;
  handlecallbackAdvancedSearchContiue?: boolean | any;
};  

function SearchResults({
  sendDisplaySection,
  handleSearchResults,
  handlecallbackSearch,
  backAdvancedSearch,
  backSearch,
  handlecallbackAdvancedSearchContiue
}: Iprops) {
  return (
    <div style={{ display: `${sendDisplaySection ? "none" : "block"}` }}>
      {backSearch && (
        <Button
          className="back-btn"
          onClick={() => {
            handleSearchResults(true);
            handlecallbackSearch(false);
          }}
        >
          <ArrowRightOutlined />
          العودة
        </Button>
      )}
      {backAdvancedSearch && (
        <Button
          className="back-btn"
          onClick={() => {
            handleSearchResults(true);
            handlecallbackAdvancedSearchContiue(false)
          }}
        >
          <ArrowRightOutlined />
          العودة
        </Button>
      )}
      <h3>نتائج البحث</h3>
      <Table<Result> dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}

export default SearchResults;
