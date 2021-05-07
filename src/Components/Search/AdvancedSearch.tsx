import React, { useState } from "react";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined } from "@ant-design/icons";
import { Form, Select, Button, Divider, Radio, Table } from "antd";

const { Option } = Select;

let years: number[] = [];
for (let i = 1430; i < 1436; i++) {
  years.push(i);
}

const cities: string[] = ["عنيزة", "المذنب", "البكرية", "رياض الخبراء", "البدائع"];

const regions: string[] = ["عنيزة", "المذنب", "البكرية", "رياض الخبراء", "البدائع"];

type Result = {
  key: number;
  code: number;
  city: string;
  region: string;
};

type Iprops = {
  form: any;
  handleCallbackAdvancedSearch: Function;
  sendAdvancedSearch: boolean;
};

function AdvancedSearch({ form, handleCallbackAdvancedSearch, sendAdvancedSearch }: Iprops) {
  const [value, setValue] = useState<number>(1);
  const [city, setCity] = useState<boolean>(false);
  const [region, setRegion] = useState<boolean>(false);
  const [displayTable, setDisplayTable] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([
    {
      key: 1,
      code: 101,
      city: "",
      region: "",
    },
  ]);

  const deleteTable = () => {
    setData([]);
    setDisplayTable(false);
  };

  const columns: ColumnsType<Result> = [
    {
      title: "الكود",
      dataIndex: "code",
      key: "code",
      align: "right",
    },
    {
      title: "المدينة",
      dataIndex: "city",
      key: "city",
      align: "right",
    },
    {
      title: "الأحياء",
      dataIndex: "region",
      key: "region",
      align: "right",
    },
    {
      title: "",
      dataIndex: "delete",
      key: "delete",
      align: "right",
      render: () => (
        <div onClick={deleteTable}>
          <DeleteOutlined />
        </div>
      ),
    },
  ];

  const addCity = () => {
    setData([{ ...data[0], city: form.getFieldValue("advancedSelectCity") }]);
    setDisplayTable(true);
    form.resetFields(["advancedSelectCity"]);
    setCity(false);
  };

  const addRegion = () => {
    setData([{ ...data[0], region: form.getFieldValue("advancedSelectRegion") }]);
    setDisplayTable(true);
    form.resetFields(["advancedSelectRegion"]);
    setRegion(false);
  };

  return (
    <div className="advanced-search" style={{ display: `${sendAdvancedSearch ? "block" : "none"}` }}>
      <Form.Item name="advanced-years" label="أختر السنة">
        <Select placeholder="بحث" allowClear>
          {years.map((year: number, i: number) => (
            <Option key={i} value={year}>
              {year}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Divider />
      <h4>أختر النطاق الجغرافى</h4>
      <Radio.Group onChange={(e: any) => setValue(e.target.value)} value={value}>
        <Radio value={1}>نطاق جغرافى</Radio>
        <Radio value={2}>نطاق جغرافى معرف</Radio>
      </Radio.Group>
      {value == 1 && (
        <>
          <div className="form-item-horizontal-wrapper">
            <Form.Item name="advancedSelectCity" label="المدينة" className="form-item-horizontal">
              <Select placeholder="أختر المدينة" onChange={(value: any) => setCity(value)} allowClear>
                {cities.map((item: string, i: number) => (
                  <Option key={i} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            {city && (
              <button className="form-item-horizontal-btn" onClick={addCity}>
                أضافة مدينة
              </button>
            )}
          </div>
          <div className="form-item-horizontal-wrapper">
            <Form.Item name="advancedSelectRegion" label="الحى" className="form-item-horizontal">
              <Select placeholder="أختر الحى" onChange={(value: any) => setRegion(value)} allowClear>
                {regions.map((item: string, i: number) => (
                  <Option key={i} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            {region && (
              <button className="form-item-horizontal-btn" onClick={addRegion}>
                أضافة حى
              </button>
            )}
          </div>
          {displayTable && <Table<Result> dataSource={data} columns={columns} pagination={false} />}
        </>
      )}
      {value == 2 && (
        <Form.Item name="advancedSelectRegionSecond">
          <Select placeholder="أختر النطاق" allowClear>
            {regions.map((item: string, i: number) => (
              <Option key={i} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>
      )}
      <Form.Item className="btn">
        <Button onClick={() => handleCallbackAdvancedSearch(false)}>أختر مستوى</Button>
      </Form.Item>
    </div>
  );
}

export default AdvancedSearch;
