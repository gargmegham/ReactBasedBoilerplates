import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import SamplePage from "./sample";

const homePage = () => {
  const {authUser} = useAuth();

  return authUser ? <SamplePage/> : <SignInPage/>;
}

export default homePage;
