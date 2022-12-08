import React from "react";
import {Card, Transfer} from "antd";

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const targetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);

class Basic extends React.Component {
  state = {
    targetKeys,
    selectedKeys: [],
  };

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({targetKeys: nextTargetKeys});
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]});
  };

  handleScroll = (direction, e) => {
  };

  render() {
    const state = this.state;
    return (
      <Card className="gx-card" title="Basic">
        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={state.targetKeys}
          selectedKeys={state.selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
        />
      </Card>
    );
  }
}

export default Basic;
