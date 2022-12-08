import React from "react";
import {Card, Pagination} from "antd";

const Jumper = () => {
  function onChange(pageNumber) {
  }

  return (
    <Card className="gx-card" title="Jumper Pagination">
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange}/>
    </Card>
  );
};

export default Jumper;
