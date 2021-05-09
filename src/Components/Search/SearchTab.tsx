import React, { useEffect, useState } from "react";
import { Form, Select, Button } from "antd";

const { Option } = Select;

let years: number[] = [];
for (let i = 1430; i < 1436; i++) {
  years.push(i);
}

const regions = ["منطقة القصيم", "المحافظات", "المدن", "الأحياء", "المناطق الجغرافية المعرفة"];

const cities = [
  "جميع المحافظات",
  "محافظة عنيزة",
  "محافظة المذنب",
  "محافظة البكرية",
  "محافظة رياض الخبراء",
  "محافظة البدائع",
];

type Iprops = {
  handleSearchTab: Function;
  sendDisplaySection: boolean;
  resetField: boolean;
};

function SearchTab({ handleSearchTab, sendDisplaySection, resetField }: Iprops) {
  const [displayCities, setDisplayCities] = useState<boolean>(false);
  const [displaySubmit, setDisplaySubmit] = useState<boolean>(false);

  useEffect(() => {
    setDisplayCities(false);
    setDisplaySubmit(false);
  }, [resetField])

  return (
    <div style={{ display: `${sendDisplaySection ? "block" : "none"}` }}>
      <Form.Item name="years" label="أختر السنة">
        <Select placeholder="بحث" allowClear>
          {years.map((year: number, i: number) => (
            <Option key={i} value={year}>
              {year}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="regions" label="أختر النطاق الجغرافى">
        <Select
          placeholder="أختر مستوى"
          allowClear
          onChange={(value) => (value ? setDisplayCities(true) : setDisplayCities(false))}
        >
          {regions.map((item: string, i: number) => (
            <Option key={i} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {displayCities && (
        <Form.Item name="cites" label="أختر محافظة">
          <Select
            allowClear
            mode="multiple"
            placeholder="بحث"
            showArrow={true}
            onChange={(value) => (value ? setDisplaySubmit(true) : setDisplaySubmit(false))}
            style={{ width: "100%" }}
          >
            {cities.map((city: string, i: number) => (
              <Option key={i} value={city}>
                {city}
              </Option>
            ))}
          </Select>
        </Form.Item>
      )}
      {displaySubmit && (
        <Form.Item className="btn">
          <Button onClick={() => handleSearchTab(false)}>متابعة</Button>
        </Form.Item>
      )}
    </div>
  );
}

export default SearchTab;
