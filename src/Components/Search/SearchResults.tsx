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

type Specific = {
  key: number;
  color: string;
  from: string;
  to: string;
};

const spicificColumns: ColumnsType<Specific> = [
  {
    title: "",
    dataIndex: "color",
    key: "color",
    align: "right",
    render:(_, {color}) => <span className="specific-color" style={{backgroundColor: color}}></span>
  },
  {
    title: "من",
    dataIndex: "from",
    key: "from",
    align: "right",
  },
  {
    title: "إلى",
    dataIndex: "to",
    key: "to",
    align: "right",
  },
];

const specificDataSource = [
  {
    key: 1,
    color: "#ff9999",
    from: "من 0.87 %",
    to: "إلى 19.2 %",
  },
  {
    key: 2,
    color: "#ff6666",
    from: "أكبر من 19.2 %",
    to: "إلى 37.54 %",
  },
  {
    key: 3,
    color: "#ff3333",
    from: "أكبر من 37.54 %",
    to: "إلى 55.87 %",
  },
  {
    key: 4,
    color: "#b30000",
    from: "أكبر من 55.87 %",
    to: "إلى 74.21 %",
  },
  {
    key: 5,
    color: "#4d0000",
    from: "أكبر من 74.21 %",
    to: "إلى 92.54 %",
  },
];

type MaxMin = {
  key: number;
  max: string;
  min: string;
};

const MaxMinColumns: ColumnsType<MaxMin> = [
  {
    title: "أكبر قيمة",
    dataIndex: "max",
    key: "max",
    align: "right",
  },
  {
    title: "أقل قيمة",
    dataIndex: "min",
    key: "min",
    align: "right",
  },
];

const MaxMinDataSource = [
  {
    key: 1,
    max: "92.54 %",
    min: "0.87 %",
  }
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
      <h3 style={{marginTop: '20px'}}>التصنيف</h3>
       <Table<Specific> dataSource={specificDataSource} columns={spicificColumns} pagination={false} size="small" />
       <br />
       <Table<MaxMin> dataSource={MaxMinDataSource} columns={MaxMinColumns} pagination={false} size="small" />
    </div>
  );
}

export default SearchResults;
