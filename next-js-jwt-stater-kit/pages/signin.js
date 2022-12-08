import React from 'react';
import asyncComponent from '../util/asyncComponent'

const SignIn = asyncComponent(() => import('../routes/userAuth/SignIn'));

const SignInPage = () => <SignIn/>;

export default SignInPage;
