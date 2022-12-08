import React from "react";
import {Card, Select} from "antd";

const Option = Select.Option;


const WithValue = () => {
  function handleChange(value) {
  }

  return (
    <Card className="gx-card" title="With Value">
      <Select labelInValue defaultValue={{key: 'lucy'}} style={{width: 120}} onChange={handleChange}>
        <Option value="jack">Jack (100)</Option>
        <Option value="lucy">Lucy (101)</Option>
      </Select>
    </Card>
  );
};

export default WithValue;
