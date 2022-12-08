import React from "react";
import {Avatar, Popover} from "antd";
import {useAuth} from "../../../util/use-auth";

const UserProfile = () => {
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
    <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
      <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar src="https://via.placeholder.com/150" className="gx-size-40 gx-pointer gx-mr-3" alt=""/>
        <span className="gx-avatar-name">{authUser.name}<i className="icon icon-chevron-down gx-fs-xxs gx-ml-2"/></span>
      </Popover>
    </div>
  ) : null
};

export default UserProfile;
