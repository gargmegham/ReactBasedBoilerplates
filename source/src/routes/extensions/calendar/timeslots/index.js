import React from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import events from "../events";

const localizer = momentLocalizer(moment);

const Timeslots = (props) => {
  return (
    <div className="gx-main-content">
      <div className="gx-rbc-calendar">
        <Calendar
          localizer={localizer}
          {...props}
          events={events}
          step={15}
          timeslots={8}
          defaultView='week'
          defaultDate={new Date(2015, 3, 12)}
        />
      </div>
    </div>
  )
};

export default Timeslots;
