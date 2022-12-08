import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import Link from 'next/link'
import IntlMessages from "../../../util/IntlMessages";
import {useAuth} from "../../../util/use-auth";
import CircularProgress from "../../../app/components/CircularProgress";

const SignIn = (props) => {
  const {isLoading, userLogin} = useAuth();

  const onFinishFailed = errorInfo => {
  };

  const onFinish = values => {
    userLogin(values);
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src="https://via.placeholder.com/272x395" alt='Neature'/>
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signIn"/></h1>
              <p><IntlMessages id="app.userAuth.bySigning"/></p>
              <p><IntlMessages id="app.userAuth.getAccount"/></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src="/images/logo.png"/>
            </div>
          </div>
          <div className="gx-app-login-content">
            <Form
              initialValues={{remember: true}}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0">

              <Form.Item
                initialValue="demo@example.com"
                rules={[{required: true, message: 'The input is not valid E-mail!'}]} name="email">
                <Input placeholder="Email"/>
              </Form.Item>
              <Form.Item
                initialValue="demo#123"
                rules={[{required: true, message: 'Please input your Password!'}]} name="password">
                <Input type="password" placeholder="Password"/>
              </Form.Item>
              <Form.Item valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                <Link href="/forgot-password">
                  <a className="gx-login-form-forgot">Forgot password</a></Link>
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signIn"/>
                </Button>
                <span><IntlMessages id="app.userAuth.or"/></span> <Link href="/signup">
                <a>
                  <IntlMessages id="app.userAuth.signUp"/>
                </a>
              </Link>
              </Form.Item>
              <span
                className="gx-text-light gx-fs-sm"> demo user email: 'demo@example.com' and password: 'demo#123'</span>
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

export default SignIn;
