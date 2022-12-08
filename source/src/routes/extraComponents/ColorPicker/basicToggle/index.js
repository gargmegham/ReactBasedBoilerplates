import React,{useState} from "react";
import {Button} from "antd";

import {CompactPicker} from "react-color";

const BasicToggle =()=> {

  const [pickerVisible,setPickerVisible]=useState(false);

    const handleColorChange = ({hex}) => console.log(hex);
    const onTogglePicker = () => setPickerVisible(preve=>!preve);

    return (
      <div className="gx-z-index-20">
        <Button onClick={onTogglePicker}>
          Toggle Picker
        </Button>

        {pickerVisible && (
          <div style={{position: 'absolute'}}>
            <CompactPicker
              color="#333"
              onChangeComplete={handleColorChange}
            />
          </div>
        )}
      </div>
    )
  }


export default BasicToggle;
