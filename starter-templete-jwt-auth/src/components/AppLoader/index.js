import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {hideMessage} from "../../appRedux/actions";
import AppNotificationContainer from "../AppNotificationContainer";

const AppLoader = () => {
  const {error, message, loading} = useSelector(({common}) => common);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error || message) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 3000);
    }
  }, [error, message, dispatch]);

  return <AppNotificationContainer loading={loading} error={error} message={message} />;
}

export default AppLoader;
