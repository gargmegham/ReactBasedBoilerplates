import React from 'react';
import asyncComponent from '../util/asyncComponent'

const ForgotPassword = asyncComponent(() => import('../routes/userAuth/ForgotPassword'));

const ForgotPasswordPage = () => <ForgotPassword/>;

export default ForgotPasswordPage;
