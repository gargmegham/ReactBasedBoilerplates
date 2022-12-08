import React from "react";
import {Avatar, Popover} from "antd";
import {useAuth} from "../../../util/use-auth";

const UserInfo = () => {
  const {authUser, userSignOut} = useAuth();

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li onClick={() => userSignOut()}>Logout
      </li>
    </ul>
  );

  return authUser ? (
    <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions} trigger="click">
      <Avatar src="https://via.placeholder.com/150" className="gx-avatar gx-pointer" alt=""/>
    </Popover>
  ) : null
};

export default UserInfo;
