import React from "react";
import {Card, Radio} from "antd";

const RadioGroup = Radio.Group;

class HorizontalRadio extends React.Component {
  state = {
    value: 1,
  };
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <Card className="gx-card" title="Horizontal Radio">
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </Card>
    );
  }
}

export default HorizontalRadio;
