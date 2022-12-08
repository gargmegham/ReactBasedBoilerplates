import React from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import events from "../events";

const localizer = momentLocalizer(moment);

const Popup = () => {
  return (
    <div className="gx-main-content">
      <div className="gx-rbc-calendar">
        <h3 className='callout'>
          Click the "+x more" link on any calendar day that cannot fit all the days events to
          see an inline popup of all the events.
        </h3>
        <Calendar
          localizer={localizer}
          popup
          events={events}
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    </div>
  )
};

export default Popup;
