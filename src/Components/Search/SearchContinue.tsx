import React, { useEffect, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { Form, Button, Input, Table } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const { Search } = Input;

type Item = {
  key: number;
  code: number;
  name: string;
  data: string;
};

const columns: ColumnsType<Item> = [
  {
    title: "الكود",
    dataIndex: "code",
    key: "code",
    align: "right",
  },
  {
    title: "أسم المؤشر",
    dataIndex: "name",
    key: "name",
    align: "right",
  },
  {
    title: "الجزمة التابع لها",
    dataIndex: "data",
    key: "data",
    align: "right",
  },
];

const dataSource = [
  {
    key: 1,
    code: 1,
    name: "أستعمالات الأراضى",
    data: "مرشرات البيانات الأساسية",
  },
  {
    key: 2,
    code: 500,
    name: "نسبة السكنى والسكنى المختلط",
    data: "مرشرات البيانات الأساسية",
  },
  {
    key: 3,
    code: 522,
    name: "السكان حسب العمر (60-فأكثر) ذكور",
    data: "مرشرات البيانات الأساسية",
  },
  {
    key: 4,
    code: 11,
    name: "معدل المواليد الخام",
    data: "مرشرات البيانات الأساسية والأقتصادية",
  },
];

type Iprops = {
  handleSearchTab: Function;
  sendSearchContinue: boolean;
  resetField: boolean;
};



function SearchContinue({ handleSearchTab, sendSearchContinue, resetField }: Iprops) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);

  const onSelectChange = (selectedRowKeys: any) => setSelectedRowKeys(selectedRowKeys);

  const onSearch = (value: any) => console.log(value);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  useEffect(() => {
    setSelectedRowKeys([]);
  }, [resetField])

  return (
    <div className="search-continue" style={{ display: `${sendSearchContinue ? "none" : "block"}` }}>
      <Button className="back-btn" onClick={() => handleSearchTab(true)}>
        <ArrowRightOutlined />
        العودة
      </Button>
      <h3>قائمة المؤشرات</h3>
      <Form.Item name="searchContinueSearch">
        <Search allowClear autoComplete="off" onSearch={onSearch} enterButton={<ArrowLeftOutlined />} />
      </Form.Item>
      <Form.Item name="searchContinueSelect">
        <Table<Item>
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </Form.Item>
      <Form.Item className="result-btn-wrapper">
        <Button className="result-btn" type="primary" disabled={!hasSelected} htmlType="submit">
          نتائج البحث
        </Button>
      </Form.Item>
    </div>
  );
}

export default SearchContinue;
