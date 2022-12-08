import React, {useState} from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import events from "../events";

const localizer = momentLocalizer(moment);

const Cultures = () => {

  const [culture, setCulture] = useState('fr');

    let cultures = ['en', 'en-GB', 'es', 'fr', 'ar-AE'];
    let rtl = culture === 'ar-AE';

    return (
      <div className="gx-main-content">
        <div className="gx-rbc-calendar">
          <div className="gx-mb-3">
            <label className="h3">Select a Culture</label>
            {' '}
            <select
              className='ant-input'
              style={{width: 200, display: 'inline-block'}}
              defaultValue={'fr'}
              onChange={e => setCulture(e.target.value)}
            >
              {
                cultures.map((c, idx) =>
                  <option key={idx} value={c}>{c}</option>
                )
              }
            </select>
          </div>
          <Calendar
            localizer={localizer}
            rtl={rtl}
            events={events}
            // culture={this.state.culture}
            defaultDate={new Date(2015, 3, 1)}
          />
        </div>
      </div>
    )
};

export default Cultures;
