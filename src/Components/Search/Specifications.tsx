import React, { useState } from "react";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

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
    render: (_, { color }) => <span className="specific-color" style={{ backgroundColor: color }}></span>,
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
  },
];

type Iprops = {
  sendDisplaySection: boolean
}

function Specifications({sendDisplaySection}: Iprops) {
  const [sectionLeft, setSectionLeft] = useState<boolean>(false);

  const handleBtn = () => {
    setSectionLeft(!sectionLeft);
  };

  return (
    <div className="specification-wrapper" style={{ display: `${sendDisplaySection ? "none" : "block"}` }}>
      <Button className={`specification-btn ${sectionLeft && "specification-btn-left"}`} onClick={handleBtn}>
        التصنيف {sectionLeft ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      </Button>
      <div className={`specification-section ${sectionLeft && "specification-section-left"}`}>
        <h3>التصنيف</h3>
        <Table<Specific> dataSource={specificDataSource} columns={spicificColumns} pagination={false} size="small" />
        <br />
        <Table<MaxMin> dataSource={MaxMinDataSource} columns={MaxMinColumns} pagination={false} size="small" />
      </div>
    </div>
  );
}

export default Specifications;
