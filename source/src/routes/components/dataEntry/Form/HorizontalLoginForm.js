import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Card, Checkbox, Form, Input, message} from "antd";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "appRedux/actions/Auth";
import "./horizontalLoginForm.less";
import CircularProgress from "components/CircularProgress/index";


const FormItem = Form.Item;

class HorizontalLoginForm extends Component {

  constructor() {
    super();
    this.state = {
      email: 'demo@example.com',
      password: 'demo#123'
    }
  }

  render() {

    const {showMessage, loader, alertMessage} = this.props;

    return (
      <Card className="gx-card" title="Horizontal Login Form">
        <Form
          initialValues={{remember: true}}
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          className="gx-login-form gx-form-row0">
          <FormItem rules={[{required: true, message: 'Please input your E-mail!'}]}
                    name="email"
                    initialValue="demo@example.com">

            <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                   placeholder="Email"/>
          </FormItem>
          <FormItem rules={[{required: true, message: 'Please input your Password!'}]}
                    name="password"
                    initialValue="demo#123">

            <Input prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                   type="password"
                   placeholder="Password"/>
          </FormItem>
          <FormItem name="remember" valuePropName="checked">
            <span className='gx-d-block gx-mb-2'>
              <Checkbox>Remember me</Checkbox>
            <span className="gx-link login-form-forgot">Forgot password</span>
            </span>
            <Button type="primary" htmlType="submit" className="login-form-button gx-mt-1">
              Log in
            </Button>
            <span className='gx-d-block gx-mt-2'>
            Or <span className="gx-link">register now!</span>
            </span>
          </FormItem>
        </Form>

        {loader &&
        <div className="gx-loader-view">
          <CircularProgress/>
        </div>
        }
        {showMessage &&
        message.error(alertMessage)}
      </Card>
    );
  }

}

const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(HorizontalLoginForm);
