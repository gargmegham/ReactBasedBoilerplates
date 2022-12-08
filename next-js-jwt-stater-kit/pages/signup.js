import React from 'react';
import asyncComponent from "../util/asyncComponent";

const SignUp = asyncComponent(() => import('../routes/userAuth/SignUp'));

const SignUpPage = () => <SignUp/>;

export default SignUpPage;
