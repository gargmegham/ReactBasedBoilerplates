import React from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import IntlMessages from "../../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../../constants/ThemeSetting";
import AppLink from "../../components/AppLink";

const SubMenu = Menu.SubMenu;

const getNavStyleSubMenuClass = (navStyle) => {
  switch (navStyle) {
    case NAV_STYLE_DEFAULT_HORIZONTAL:
      return "gx-menu-horizontal gx-submenu-popup-curve";
    case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
      return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
    case NAV_STYLE_BELOW_HEADER:
      return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
    case NAV_STYLE_ABOVE_HEADER:
      return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
    default:
      return "gx-menu-horizontal";
  }
};

const HorizontalNav = () => {
  const navStyle = useSelector(({settings}) => settings.navStyle);
  const pathname = useSelector(({settings}) => settings.pathname);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal">
      <SubMenu popupClassName={getNavStyleSubMenuClass(navStyle)} key="main" title={<IntlMessages id="sidebar.main"/>}>
        <SubMenu popupClassName="gx-menu-horizontal" key="dashboard"
                 title={<span> <i className="icon icon-dasbhoard"/>
                         <IntlMessages id="sidebar.dashboard"/></span>}>
          <Menu.Item key="main/dashboard/crypto">
            <AppLink href="/main/dashboard/crypto">
              <i className="icon icon-crypto"/>
              <IntlMessages id="sidebar.dashboard.crypto"/>
            </AppLink>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;

