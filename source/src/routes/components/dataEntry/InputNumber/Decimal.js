import React from "react";
import {Card, InputNumber} from "antd";

const Decimal = () => {
  function onChange(value) {
  }

  return (
    <Card className="gx-card" title="Decimal">
      <InputNumber min={0} max={10} step={0.1} onChange={onChange}/>
    </Card>
  );
};

export default Decimal;
