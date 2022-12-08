import React from "react";
import {Col, Row} from "antd";
import {Area, AreaChart, ResponsiveContainer, Tooltip} from "recharts";

import Auxiliary from "util/Auxiliary";
import ChartCard from "components/dashboard/Listing/ChartCard";
import {citiesData, propertiesData, queriesData, visitsData} from "../../Metrics/data";
import UserImages from "components/dashboard/Listing/UserImages";
import RecentActivity from "components/dashboard/CRM/RecentActivity";
import {recentActivity} from "../../../socialApps/Wall/data";
import Widget from "components/Widget/index";
import CurrentPlan from "components/dashboard/Listing/CurrentPlan";
import DealsClosedCard from "components/dashboard/Listing/DealsClosedCard";
import PropertiesCard from "components/dashboard/Listing/PropertiesCard";

const Listing = () => {
  return (
    <Auxiliary>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard chartProperties={{
            title: 'PROPERTIES',
            prize: '26,873',
            icon: 'stats',
            bgColor: 'primary',
            styleName: 'up',
            desc: 'This week',
            percent: '03%',
          }}
                     children={<ResponsiveContainer width="100%" height={75}>
                       <AreaChart data={propertiesData}
                                  margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                         <Tooltip/>
                         <Area dataKey='properties' strokeWidth={0} stackId="2" stroke='#092453' fill="#092453"
                               fillOpacity={1}/>
                       </AreaChart>
                     </ResponsiveContainer>}
          />

        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            chartProperties={{
              title: 'CITIES',
              prize: '3,840',
              icon: 'stats',
              bgColor: 'orange',
              styleName: 'up',
              desc: '7 New cities this week',
              percent: '',
            }}
            children={<ResponsiveContainer width="100%" height={75}>
              <AreaChart data={citiesData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip/>
                <Area dataKey='cities' type='monotone' strokeWidth={0} stackId="2" stroke='#C87000'
                      fill="#C87000"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>}
          />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            chartProperties={{
              title: 'ONLINE VISITS',
              prize: '84,729',
              icon: 'stats',
              bgColor: 'teal',
              styleName: 'down',
              desc: 'Avg. 327 visits daily',
              percent: '',
            }}
            children={<ResponsiveContainer width="100%" height={75}>
              <AreaChart data={visitsData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip/>
                <Area dataKey='visit' strokeWidth={0} stackId="2" stroke='#158765' fill="#158765"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>}
          />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            chartProperties={{
              title: 'ONLINE QUERIES',
              prize: '87,239',
              icon: 'stats',
              bgColor: 'pink',
              styleName: 'down',
              desc: 'from past month',
              percent: '39',
            }}
            children={<ResponsiveContainer width="100%" height={75}>
              <AreaChart data={queriesData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip/>
                <Area dataKey='queries' strokeWidth={0} stackId="2" stroke='#BB1258' fill="#BB1258"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>}
          />
        </Col>

        <Col xl={8} lg={24} md={24} sm={24} xs={24} className="gx-order-lg-2">
          <Widget>
            <RecentActivity recentList={recentActivity}/>
          </Widget>
        </Col>

        <Col xl={16} lg={24} md={24} sm={24} xs={24} className="gx-order-lg-1">
          <UserImages/>
          <Row>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <CurrentPlan/>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <DealsClosedCard/>
            </Col>
          </Row>
          <PropertiesCard/>

        </Col>

      </Row>

    </Auxiliary>
  );
};

export default Listing;
