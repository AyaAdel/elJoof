import React, { useEffect, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Form, Button, Input, Table, Select, Radio } from "antd";

const { Option } = Select;

const indicator: string[] = ["نسبة العمالة إلى عدد السكان"];

type Item = {
  key: number;
  code: number;
  name: string;
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
];

const dataSource = [
  {
    key: 1,
    code: 1,
    name: "نسبة العمالة إلى عدد السكان",
  },
];

type Iprops = {
  sendAdvancedSearchContinue: boolean;
  handlecallbackAdvancedSearchContiue: Function;
  resetField: boolean;
};

function AdvancedSearchContinue({ sendAdvancedSearchContinue, handlecallbackAdvancedSearchContiue, resetField }: Iprops) {
  const [value, setValue] = useState<number>(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [displaySelectResult, setDisplaySelectResult] = useState<boolean>(false);

  const onSelectChange = (selectedRowKeys: any) => setSelectedRowKeys(selectedRowKeys);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  useEffect(() => {
    setValue(1);
    setSelectedRowKeys([]);
    setDisplaySelectResult(false);
  }, [resetField])

  return (
    <div style={{ display: `${sendAdvancedSearchContinue ? "none" : "block"}` }}>
      <Button className="back-btn" onClick={() => handlecallbackAdvancedSearchContiue(true)}>
        <ArrowRightOutlined />
        العودة
      </Button>
      <h3>أختر المؤشر</h3>
      <Form.Item label="البحث بأسم المرشر" name="indicatorSearch">
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item name="indicatorName" label="أسم المؤشر">
        <Select placeholder="أختر المؤشر" allowClear>
          {indicator.map((item: string, i: number) => (
            <Option key={i} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="indicatorName2" label="أسم المؤشر">
        <Select placeholder="أختر المؤشر" onChange={() => setDisplaySelectResult(!displaySelectResult)} allowClear>
          {indicator.map((item: string, i: number) => (
            <Option key={i} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {displaySelectResult && (
        <>
          <h4>المؤشرات</h4>
          <Radio.Group onChange={(e: any) => setValue(e.target.value)} value={value}>
            <Radio value={1}>قيمة مؤشر</Radio>
            <Radio value={2}>رسم بيانى أعمدة</Radio>
            <Radio value={3}>رسم بيانى دائرى</Radio>
          </Radio.Group>
          <h4>أختر المؤشرات</h4>
          <Form.Item>
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
              عرض
            </Button>
          </Form.Item>
        </>
      )}
    </div>
  );
}

export default AdvancedSearchContinue;
