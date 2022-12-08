import React from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import events from "../events";

const localizer = momentLocalizer(moment);

const Basic = (props) => {
  return (
    <div className="gx-main-content">
      <div className="gx-rbc-calendar">
        <Calendar
          localizer={localizer}
          {...props}
          events={events}
          step={60}
          defaultDate={new Date(2015, 3, 1)}/>
      </div>
    </div>
  )
};

export default Basic;
