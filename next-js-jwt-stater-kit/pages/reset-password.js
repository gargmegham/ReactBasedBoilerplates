import React from 'react';
import asyncComponent from '../util/asyncComponent'

const ResetPassword = asyncComponent(() => import('../routes/userAuth/ResetPassword'));

const ResetPasswordPage = () => <ResetPassword/>;

export default ResetPasswordPage;
