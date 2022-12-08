import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import Link from 'next/link'

import IntlMessages from "../../../util/IntlMessages";
import {useAuth} from "../../../util/use-auth";
import CircularProgress from "../../../app/components/CircularProgress";

const FormItem = Form.Item;

const SignUp = (props) => {
  const {isLoading, userSignup, getAuthUser} = useAuth();

  const onFinishFailed = errorInfo => {
  };

  const onFinish = values => {
    userSignup(values, () => {
      getAuthUser();
    });
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src='https://via.placeholder.com/272x395' alt='Neature'/>
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signUp"/></h1>
              <p><IntlMessages id="app.userAuth.bySigning"/></p>
              <p><IntlMessages id="app.userAuth.getAccount"/></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={("/images/logo.png")}/>
            </div>
          </div>

          <div className="gx-app-login-content">
            <Form
              initialValues={{remember: true}}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0">
              <FormItem rules={[{required: true, message: 'Please input your username!'}]} name="name">
                <Input placeholder="Name"/>
              </FormItem>

              <FormItem name="email" rules={[{
                required: true, type: 'email', message: 'The input is not valid E-mail!',
              }]}>
                <Input placeholder="Email"/>
              </FormItem>
              <FormItem name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
                <Input type="password" placeholder="Password"/>
              </FormItem>
              <Form.Item>
                <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                <span className="gx-signup-form-forgot gx-link"><IntlMessages
                  id="appModule.termAndCondition"/></span>
              </Form.Item>
              <FormItem>
                <div><Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signUp"/>
                </Button>
                  <span><IntlMessages id="app.userAuth.or"/></span> <Link href="/signin">
                    <a><IntlMessages
                      id="app.userAuth.signIn"/></a>

                  </Link></div>
              </FormItem>
            </Form>
          </div>
          {isLoading &&
          <div className="gx-loader-view">
            <CircularProgress/>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
