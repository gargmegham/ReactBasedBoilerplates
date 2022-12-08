import React from "react";
import {Col, Row} from "antd";

import TaskList from "components/dashboard/CRM/TaskList";
import SiteVisit from "components/dashboard/CRM/SiteVisit";
import RecentActivity from "components/dashboard/CRM/RecentActivity";
import TicketList from "components/dashboard/CRM/TicketList";
import TaskByStatus from "components/dashboard/CRM/TaskByStatus";
import WelComeCard from "components/dashboard/CRM/WelComeCard";
import Overview from "components/dashboard/CRM/Overview";
import SiteAudience from "components/dashboard/CRM/SiteAudience";
import Auxiliary from "util/Auxiliary";
import TotalRevenueCard from "components/dashboard/CRM/TotalRevenueCard";
import NewCustomers from "components/dashboard/CRM/NewCustomers";
import GrowthCard from "components/dashboard/CRM/GrowthCard";
import Widget from "components/Widget/index";
import CurrencyCalculator from "components/dashboard/Crypto/CurrencyCalculator";
import IconWithTextCard from "components/dashboard/CRM/IconWithTextCard";
import {recentActivity, taskList, trafficData} from "./data";

const CRM = () => {
  return (
    <Auxiliary>
      <Row>
        <Col span={24}>
          <div className="gx-card">
            <div className="gx-card-body">
              <Row>
                <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                  <WelComeCard/>
                </Col>

                <Col xl={6} lg={12} md={12} sm={12} xs={24} className="gx-audi-col">
                  <SiteAudience/>
                </Col>

                <Col xl={12} lg={24} md={24} sm={24} xs={24} className="gx-visit-col">
                  <SiteVisit/>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xl={8} lg={24} md={8} sm={24} xs={24}>
          <TotalRevenueCard/>
        </Col>
        <Col xl={8} lg={12} md={8} sm={24} xs={24}>
          <NewCustomers/>
        </Col>
        <Col xl={8} lg={12} md={8} sm={24} xs={24}>
          <GrowthCard trafficData={trafficData}/>
        </Col>

        <Col xl={8} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
          <Widget>
            <RecentActivity recentList={recentActivity} shape="circle"/>
          </Widget>
          <CurrencyCalculator/>
        </Col>

        <Col xl={16} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-1">
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="cyan" icon="diamond" title="09" subTitle="Projects"/>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="orange" icon="tasks" title="687" subTitle="Tasks"/>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="teal" icon="team" title="04" subTitle="Teams"/>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="red" icon="files" title="09" subTitle="Files"/>
            </Col>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <TaskList taskList={taskList}/>
            </Col>
            <Col xl={16} lg={16} md={16} sm={24} xs={24}>
              <TicketList/>
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
              <TaskByStatus/>
            </Col>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <Overview/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Auxiliary>
  );
};

export default CRM;
