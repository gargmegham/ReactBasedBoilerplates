import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import {useSelector} from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = ({sidebarCollapsed, setSidebarCollapsed}) => {
  const {navStyle, themeType} = useSelector(({settings}) => settings);
  const pathname = useSelector(({common}) => common.pathname);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (
    <>
      <SidebarLogo sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed}/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <MenuItemGroup key="main" className="gx-menu-group" title={<IntlMessages id="sidebar.main"/>}>
              <SubMenu key="dashboard" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span> <i className="icon icon-dasbhoard"/>
                         <span><IntlMessages id="sidebar.dashboard"/></span></span>}>
                <Menu.Item key="main/dashboard/crypto">
                  <Link to="/main/dashboard/crypto">
                    <i className="icon icon-crypto"/>
                    <span><IntlMessages id="sidebar.dashboard.crypto"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="main/dashboard/crm">
                  <Link to="/main/dashboard/crm">
                    <i className="icon icon-crm"/>
                    <span><IntlMessages id="sidebar.dashboard.crm"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="main/dashboard/listing">
                  <Link to="/main/dashboard/listing">
                    <i className="icon icon-listing-dbrd"/>
                    <span><IntlMessages id="sidebar.dashboard.listing"/></span>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="main/widgets">
                <Link to="/main/widgets"><i className="icon icon-widgets"/>
                  <span><IntlMessages id="sidebar.widgets"/></span></Link>
              </Menu.Item>

              <Menu.Item key="main/metrics">
                <Link to="/main/metrics"><i className="icon icon-apps"/>
                  <span><IntlMessages id="sidebar.metrics"/></span></Link>
              </Menu.Item>

              <Menu.Item key="main/layouts">
                <Link to="/main/layouts"><i className="icon icon-card"/>
                  <span> <IntlMessages id="sidebar.layouts"/></span></Link>
              </Menu.Item>

            </MenuItemGroup>

            <MenuItemGroup key="in-built-apps" className="gx-menu-group"
                           title={<IntlMessages id="sidebar.inBuiltApp"/>}>
              <Menu.Item key="in-built-apps/mail">
                <Link to="/in-built-apps/mail"><i className="icon icon-email"/><span><IntlMessages
                  id="sidebar.mailApp"/></span></Link>
              </Menu.Item>

              <Menu.Item key="in-built-apps/todo">
                <Link to="/in-built-apps/todo"><i
                  className="icon icon-check-square-o"/><span><IntlMessages
                  id="sidebar.todoApp"/></span></Link>
              </Menu.Item>

              <Menu.Item key="in-built-apps/contacts">
                <Link to="/in-built-apps/contacts"><i className="icon icon-contacts"/><span><IntlMessages
                  id="sidebar.contactsApp"/></span></Link>
              </Menu.Item>

              <Menu.Item key="in-built-apps/chat">
                <Link to="/in-built-apps/chat"><i
                  className="icon icon-chat-bubble -flex-column-reverse"/><span><IntlMessages
                  id="sidebar.chatApp"/></span></Link>
              </Menu.Item>

              <Menu.Item key="main/notes">
                <Link to="/in-built-apps/notes"><i className="icon icon-copy"/>
                  <span><IntlMessages id="sidebar.notes"/></span></Link>
              </Menu.Item>

              <Menu.Item key="main/algolia">
                <Link to="/main/algolia"><i className="icon icon-shopping-cart "/>
                  <span><IntlMessages id="sidebar.algolia"/></span></Link>
              </Menu.Item>

              <Menu.Item key="in-built-apps/firebase-crud">
                <Link to="/in-built-apps/firebase-crud"><i
                  className="icon icon-icon"/><span><IntlMessages
                  id="sidebar.crud"/></span></Link>
              </Menu.Item>
            </MenuItemGroup>

            <MenuItemGroup key="social-apps" className="gx-menu-group" title={<IntlMessages id="sidebar.social"/>}>
              <Menu.Item key="social-apps/profile">
                <Link to="/social-apps/profile">
                  <i className="icon icon-profile2"/>
                  <span><IntlMessages id="sidebar.extensions.profile"/></span>
                </Link>
              </Menu.Item>

              <Menu.Item key="social-apps/wall">
                <Link to="/social-apps/wall">
                  <i className="icon icon-avatar -flex-column-reverse"/>
                  <span><IntlMessages id="sidebar.wall"/></span>
                </Link>
              </Menu.Item>
            </MenuItemGroup>

            <MenuItemGroup key="components" className="gx-menu-group" title={<IntlMessages id="sidebar.components"/>}>

              <SubMenu key="general" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span>
                  <i className="icon icon-all-contacts"/>
                   <span><IntlMessages id="sidebar.components.general"/></span>
              </span>}>
                <Menu.Item key="components/general/button">
                  <Link to="/components/general/button">
                    <span><IntlMessages id="sidebar.general.button"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/general/icon">
                  <Link to="/components/general/icon">
                    <span><IntlMessages id="sidebar.general.icon"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="navigation" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span>
                  <i className="icon icon-navigation"/>
                  <span><IntlMessages id="sidebar.components.navigation"/></span>
              </span>}>
                <Menu.Item key="components/navigation/affix">
                  <Link to="/components/navigation/affix">
                    <span><IntlMessages
                      id="sidebar.navigation.affix"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/breadcrumb">
                  <Link to="/components/navigation/breadcrumb">
                    <span><IntlMessages
                      id="sidebar.navigation.breadcrumb"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/dropdown">
                  <Link to="/components/navigation/dropdown">
                    <span><IntlMessages
                      id="sidebar.navigation.dropdown"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/menu">
                  <Link to="/components/navigation/menu">
                    <span><IntlMessages
                      id="sidebar.navigation.menu"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/pagination">
                  <Link to="/components/navigation/pagination">
                    <span><IntlMessages
                      id="sidebar.navigation.pagination"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/steps">
                  <Link to="/components/navigation/steps">
                    <span><IntlMessages
                      id="sidebar.navigation.steps"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="dataEntry" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span>
                  <i className="icon icon-data-entry"/>
                  <span><IntlMessages id="sidebar.components.dataEntry"/></span>
              </span>}>
                <Menu.Item key="components/dataEntry/autoComplete">
                  <Link to="/components/dataEntry/autoComplete">
                    <span><IntlMessages
                      id="sidebar.dataEntry.autoComplete"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/checkbox">
                  <Link to="/components/dataEntry/checkbox">
                    <span><IntlMessages
                      id="sidebar.dataEntry.checkbox"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/cascader">
                  <Link to="/components/dataEntry/cascader">
                    <span><IntlMessages
                      id="sidebar.dataEntry.cascader"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/datePicker">
                  <Link to="/components/dataEntry/datePicker">
                    <span><IntlMessages
                      id="sidebar.dataEntry.datePicker"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/form">
                  <Link to="/components/dataEntry/form">
                    <span><IntlMessages
                      id="sidebar.dataEntry.form"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/inputNumber">
                  <Link to="/components/dataEntry/inputNumber">
                    <span><IntlMessages
                      id="sidebar.dataEntry.inputNumber"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/input">
                  <Link to="/components/dataEntry/input">
                    <span><IntlMessages
                      id="sidebar.dataEntry.input"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/mention">
                  <Link to="/components/dataEntry/mention">
                    <span><IntlMessages
                      id="sidebar.dataEntry.mention"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/rate">
                  <Link to="/components/dataEntry/rate">
                    <span><IntlMessages
                      id="sidebar.dataEntry.rate"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/radio">
                  <Link to="/components/dataEntry/radio">
                    <span><IntlMessages
                      id="sidebar.dataEntry.radio"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/switch">
                  <Link to="/components/dataEntry/switch">
                    <span><IntlMessages
                      id="sidebar.dataEntry.switch"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/slider">
                  <Link to="/components/dataEntry/slider">
                    <span><IntlMessages
                      id="sidebar.dataEntry.slider"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/select">
                  <Link to="/components/dataEntry/select">
                    <span><IntlMessages
                      id="sidebar.dataEntry.select"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/treeSelect">
                  <Link to="/components/dataEntry/treeSelect">
                    <span><IntlMessages
                      id="sidebar.dataEntry.treeSelect"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/transfer">
                  <Link to="/components/dataEntry/transfer">
                    <span><IntlMessages
                      id="sidebar.dataEntry.transfer"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/timePicker">
                  <Link to="/components/dataEntry/timePicker">
                    <span><IntlMessages
                      id="sidebar.dataEntry.timePicker"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/upload">
                  <Link to="/components/dataEntry/upload">
                    <span><IntlMessages
                      id="sidebar.dataEntry.upload"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="dataDisplay" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span>
                  <i className="icon icon-data-display"/>

                    <span><IntlMessages id="sidebar.components.dataDisplay"/></span>

              </span>}>
                <Menu.Item key="components/dataDisplay/avatar">
                  <Link to="/components/dataDisplay/avatar">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.avatar"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/badge">
                  <Link to="/components/dataDisplay/badge">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.badge"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/collapse">
                  <Link to="/components/dataDisplay/collapse">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.collapse"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/carousel">
                  <Link to="/components/dataDisplay/carousel">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.carousel"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/card">
                  <Link to="/components/dataDisplay/card">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.card"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/calendar">
                  <Link to="/components/dataDisplay/calendar">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.calender"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/list">
                  <Link to="/components/dataDisplay/list">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.list"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/popover">
                  <Link to="/components/dataDisplay/popover">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.popover"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/tree">
                  <Link to="/components/dataDisplay/tree">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.tree"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/tooltip">
                  <Link to="/components/dataDisplay/tooltip">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.toolTips"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/timeline">
                  <Link to="/components/dataDisplay/timeline">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.timeLine"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/tag">
                  <Link to="/components/dataDisplay/tag">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.tag"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/dataDisplay/tabs">
                  <Link to="/components/dataDisplay/tabs">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.tabs"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="feedBack" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span>
                  <i className="icon icon-feedback"/>
                    <span><IntlMessages id="sidebar.components.feedBack"/></span>

              </span>}>
                <Menu.Item key="components/feedBack/alert">
                  <Link to="/components/feedBack/alert">
                    <span><IntlMessages
                      id="sidebar.feedBack.alert"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/modal">
                  <Link to="/components/feedBack/modal">
                    <span><IntlMessages
                      id="sidebar.feedBack.modal"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/message">
                  <Link to="/components/feedBack/message">
                    <span><IntlMessages
                      id="sidebar.feedBack.message"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/notification">
                  <Link to="/components/feedBack/notification">
                    <span><IntlMessages
                      id="sidebar.feedBack.notification"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/progress">
                  <Link to="/components/feedBack/progress">
                    <span><IntlMessages
                      id="sidebar.feedBack.progress"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/popconfirm">
                  <Link to="/components/feedBack/popconfirm">
                    <span><IntlMessages id="sidebar.feedBack.popConfirm"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/feedBack/spin">
                  <Link to="/components/feedBack/spin">
                    <span><IntlMessages
                      id="sidebar.feedBack.spin"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="others" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span>
                  <i className="icon icon-inbox"/>
                    <span><IntlMessages id="sidebar.components.other"/></span>

              </span>}>
                <Menu.Item key="components/others/anchor">
                  <Link to="/components/others/anchor">
                    <span><IntlMessages
                      id="sidebar.other.anchor"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/others/backtop">
                  <Link to="/components/others/backtop">
                    <span><IntlMessages
                      id="sidebar.other.backTop"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/others/divider">
                  <Link to="/components/others/divider">
                    <span><IntlMessages
                      id="sidebar.other.divider"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="table" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={
                         <span>
                           <i className="icon icon-table"/>

                             <span><IntlMessages id="sidebar.dataDisplay.table"/></span>

                         </span>}>
                <Menu.Item key="components/table/basic">
                  <Link to="/components/table/basic">
                    <span><IntlMessages
                      id="sidebar.view.basicTable"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/table/data">
                  <Link to="/components/table/data">
                    <span><IntlMessages
                      id="sidebar.view.dataTable"/></span></Link>
                </Menu.Item>
              </SubMenu>

            </MenuItemGroup>

            <MenuItemGroup key="extraComponents" className="gx-menu-group"
                           title={<IntlMessages id="sidebar.extraComponents"/>}>

              <SubMenu key="editor" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span>
                         <i className="icon icon-editor"/>
                        <span><IntlMessages id="sidebar.editors"/></span>
                       </span>}>
                <Menu.Item key="extra-components/editor/ck">
                  <Link to="/extra-components/editor/ck">
                    <IntlMessages
                      id="sidebar.editors.CKEditor"/></Link>
                </Menu.Item>
                <Menu.Item key="extra-components/editor/wysiswyg">
                  <Link to="/extra-components/editor/wysiswyg">
                    <IntlMessages
                      id="sidebar.editors.WYSISWYGEditor"/></Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="extra-components/color-picker">
                <Link to="/extra-components/color-picker">
                  <i className="icon icon-picker"/>

                  <span><IntlMessages id="sidebar.pickers.colorPickers"/></span>

                </Link>
              </Menu.Item>

              <Menu.Item key="extra-components/dnd">
                <Link to="/extra-components/dnd">
                  <i className="icon icon-drag-and-drop"/>

                  <span><IntlMessages id="sidebar.extensions.dragNDrop"/></span>

                </Link>
              </Menu.Item>

              <Menu.Item key="extra-components/sweet-alert">
                <Link to="/extra-components/sweet-alert">
                  <i className="icon icon-sweet-alert"/>

                  <span><IntlMessages id="sidebar.extensions.sweetAlert"/></span>

                </Link>
              </Menu.Item>

              <Menu.Item key="extra-components/notification">
                <Link to="/extra-components/notification"><i className="icon icon-notification"/>
                  <span><IntlMessages
                    id="sidebar.extensions.notification"/></span></Link>
              </Menu.Item>

              <SubMenu key="time-line" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-timeline"/><span><IntlMessages
                         id="sidebar.timeLine"/></span></span>}>
                <Menu.Item key="extra-components/time-line/default">
                  <Link to="/extra-components/time-line/default">
                    <span><IntlMessages
                      id="sidebar.timeLine.default"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extra-components/time-line/default-with-icon">
                  <Link to="/extra-components/time-line/default-with-icon">
                    <span><IntlMessages
                      id="sidebar.timeLine.defaultwithIcons"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extra-components/time-line/left-align">
                  <Link to="/extra-components/time-line/left-align">
                    <span><IntlMessages
                      id="sidebar.timeLine.leftAligned"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="extra-components/shuffle">
                <Link to="/extra-components/shuffle"><i className="icon icon-shuffle"/>
                  <span><IntlMessages
                    id="sidebar.extensions.shuffle"/></span></Link>
              </Menu.Item>

            </MenuItemGroup>

            <MenuItemGroup key="extensions" className="gx-menu-group" title={<IntlMessages id="sidebar.extensions"/>}>

              <SubMenu key="map" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span> <i className="icon icon-extensions"/>
                        <span><IntlMessages id="sidebar.map"/></span></span>}>
                <SubMenu key="google" popupClassName={getNavStyleSubMenuClass(navStyle)}
                         title={
                           <span>
                           <i className="icon icon-map-google"/>
                           <span><IntlMessages id="sidebar.google.map"/></span></span>}>

                  <Menu.Item key="extensions/map/google/simple">
                    <Link to="/extensions/map/google/simple">
                      <span><IntlMessages
                        id="sidebar.map.simple"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/styled">
                    <Link to="/extensions/map/google/styled">
                      <span><IntlMessages
                        id="sidebar.map.styled"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/geo-location">
                    <Link to="/extensions/map/google/geo-location">
                      <span><IntlMessages
                        id="sidebar.map.geoLocation"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/directions">
                    <Link to="/extensions/map/google/directions">
                      <span><IntlMessages
                        id="sidebar.map.mapDirection"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/overlay">
                    <Link to="/extensions/map/google/overlay">
                      <span><IntlMessages
                        id="sidebar.map.overlay"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/kml">
                    <Link to="/extensions/map/google/kml">
                      <span><IntlMessages
                        id="sidebar.map.kmLayer"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/popup-info">
                    <Link to="/extensions/map/google/popup-info">
                      <span><IntlMessages
                        id="sidebar.map.popupInfo"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/traffic">
                    <Link to="/extensions/map/google/traffic">
                      <span><IntlMessages
                        id="sidebar.map.trafficLayer"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/street-view">
                    <Link to="/extensions/map/google/street-view">
                      <span><IntlMessages
                        id="sidebar.map.streetView"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/event">
                    <Link to="/extensions/map/google/event">
                      <span><IntlMessages
                        id="sidebar.map.eventListener"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/drawing">
                    <Link to="/extensions/map/google/drawing">
                      <span><IntlMessages
                        id="sidebar.map.mapDrawing"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/clustering">
                    <Link to="/extensions/map/google/clustering">
                      <span><IntlMessages
                        id="sidebar.map.mapClustering"/></span></Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu key="ammap" popupClassName={getNavStyleSubMenuClass(navStyle)}
                         title={
                           <span><i className="icon icon-amchart"/>
                           <span><IntlMessages id="sidebar.ammap"/></span></span>}>

                  <Menu.Item key="extensions/map/ammap/animations-lines">
                    <Link to="/extensions/map/ammap/animations-lines">
                      <span><IntlMessages
                        id="sidebar.map.animations.lines"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/curved-lines">
                    <Link to="/extensions/map/ammap/curved-lines">
                      <span><IntlMessages
                        id="sidebar.map.curved.lines"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/zooming-countries">
                    <Link to="/extensions/map/ammap/zooming-countries">
                      <span><IntlMessages
                        id="sidebar.map.zooming.countries"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/patterns">
                    <Link to="/extensions/map/ammap/patterns">
                      <span><IntlMessages
                        id="sidebar.map.patterns"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/capitals-map">
                    <Link to="/extensions/map/ammap/capitals-map">
                      <span><IntlMessages
                        id="sidebar.map.capitals.map"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/map-markers">
                    <Link to="/extensions/map/ammap/map-markers">
                     <span><IntlMessages
                       id="sidebar.map.markers"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/flight-routes">
                    <Link to="/extensions/map/ammap/flight-routes">
                      <span><IntlMessages
                        id="sidebar.map.flight.routes"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/choropleth">
                    <Link to="/extensions/map/ammap/choropleth">
                      <span><IntlMessages
                        id="sidebar.map.choropleth"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/grouped-countries">
                    <Link to="/extensions/map/ammap/grouped-countries">
                      <span><IntlMessages
                        id="sidebar.map.grouped.countries"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/bubbles">
                    <Link to="/extensions/map/ammap/bubbles">
                      <span><IntlMessages
                        id="sidebar.map.bubbles"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/drill-down">
                    <Link to="/extensions/map/ammap/drill-down">
                      <span><IntlMessages
                        id="sidebar.map.drill.down"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/multiple-areas">
                    <Link to="/extensions/map/ammap/multiple-areas">
                      <span><IntlMessages
                        id="sidebar.map.multiple.areas"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/weather">
                    <Link to="/extensions/map/ammap/weather">
                      <span><IntlMessages
                        id="sidebar.map.weather"/></span></Link>
                  </Menu.Item>

                </SubMenu>
              </SubMenu>

              <SubMenu key="chart" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span> <i className="icon icon-chart"/>
                        <span><IntlMessages id="sidebar.chart"/></span></span>}>

                <SubMenu key="rechart" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                  <span><i className="icon icon-chart-area-new"/>
                    <span><IntlMessages id="sidebar.components.rechart"/></span>
              </span>}>

                  <Menu.Item key="extensions/chart/recharts/area">
                    <Link to="/extensions/chart/recharts/area">
                      <span><IntlMessages
                        id="sidebar.chart.area"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/bar">
                    <Link to="/extensions/chart/recharts/bar">
                      <span><IntlMessages
                        id="sidebar.chart.bar"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/composed">
                    <Link to="/extensions/chart/recharts/composed">
                      <span><IntlMessages
                        id="sidebar.chart.composed"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/line">
                    <Link to="/extensions/chart/recharts/line">
                      <span><IntlMessages
                        id="sidebar.chart.line"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/pie">
                    <Link to="/extensions/chart/recharts/pie">
                      <span><IntlMessages
                        id="sidebar.chart.pie"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/radar">
                    <Link to="/extensions/chart/recharts/radar">
                      <span><IntlMessages
                        id="sidebar.chart.radar"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/radial">
                    <Link to="/extensions/chart/recharts/radial">
                      <span><IntlMessages
                        id="sidebar.chart.radial"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/scatter">
                    <Link to="/extensions/chart/recharts/scatter">
                      <span><IntlMessages
                        id="sidebar.chart.scatter"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/treemap">
                    <Link to="/extensions/chart/recharts/treemap">
                      <span><IntlMessages
                        id="sidebar.chart.tree"/></span></Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu key="amchart" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                  <span><i className="icon icon-amchart"/>
                <span><IntlMessages id="sidebar.components.amchart"/></span>
              </span>}>
                  <Menu.Item key="extensions/chart/amchart/area">
                    <Link to="/extensions/chart/amchart/area">
                      <span><IntlMessages
                        id="sidebar.chart.area"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/amchart/bar">
                    <Link to="/extensions/chart/amchart/bar">
                      <span><IntlMessages
                        id="sidebar.chart.bar"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/amchart/line">
                    <Link to="/extensions/chart/amchart/line">
                      <span><IntlMessages
                        id="sidebar.chart.line"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/amchart/pie">
                    <Link to="/extensions/chart/amchart/pie">
                      <span><IntlMessages
                        id="sidebar.chart.pie"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/amchart/composed">
                    <Link to="/extensions/chart/amchart/composed">
                      <span><IntlMessages
                        id="sidebar.chart.composed"/></span></Link>
                  </Menu.Item>
                </SubMenu>

              </SubMenu>

              <SubMenu key="calendar" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-calendar"/><span><IntlMessages
                         id="sidebar.calendar"/></span></span>}>
                <Menu.Item key="extensions/calendar/basic">
                  <Link to="/extensions/calendar/basic">
                    <span><IntlMessages
                      id="sidebar.calendar.basic"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/cultures">
                  <Link to="/extensions/calendar/cultures">
                    <span><IntlMessages
                      id="sidebar.calendar.cultures"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/popup">
                  <Link to="/extensions/calendar/popup">
                    <span><IntlMessages
                      id="sidebar.calendar.popup"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/rendering">
                  <Link to="/extensions/calendar/rendering">
                    <span><IntlMessages
                      id="sidebar.calendar.rendering"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/selectable">
                  <Link to="/extensions/calendar/selectable">
                    <span><IntlMessages
                      id="sidebar.calendar.selectable"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extensions/calendar/timeslots">
                  <Link to="/extensions/calendar/timeslots">
                    <span><IntlMessages id="sidebar.calendar.timeslots"/></span></Link>
                </Menu.Item>
              </SubMenu>

            </MenuItemGroup>

            <MenuItemGroup key="custom-views" className="gx-menu-group"
                           title={<IntlMessages id="sidebar.customViews"/>}>
              <SubMenu key="user-auth" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-auth-screen"/><span><IntlMessages
                         id="app.userAuth"/></span></span>}>
                <Menu.Item key="custom-views/user-auth/sign-in">
                  <Link to="/custom-views/user-auth/sign-in">
                    <span><IntlMessages
                      id="app.userAuth.signIn"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/user-auth/forgot-password">
                  <Link to="/custom-views/user-auth/forgot-password">
                    <span><IntlMessages
                      id="app.userAuth.forgotPassword"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/user-auth/sign-up">
                  <Link to="/custom-views/user-auth/sign-up">
                    <span><IntlMessages
                      id="app.userAuth.signUp"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/user-auth/lock-screen">
                  <Link to="/custom-views/user-auth/lock-screen">
                    <span><IntlMessages
                      id="app.userAuth.lockScreen"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/user-auth/reset-password">
                  <Link to="/custom-views/user-auth/reset-password">
                    <span><IntlMessages
                      id="app.userAuth.resetPassword"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="list-type" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-all-contacts"/><span><IntlMessages
                         id="sidebar.listType"/></span></span>}>
                <Menu.Item key="custom-views/list-type/simple-list">
                  <Link to="/custom-views/list-type/simple-list">
                    <span><IntlMessages
                      id="sidebar.listType.plainListView"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/list-type/strip-list">
                  <Link to="/custom-views/list-type/strip-list">
                    <span><IntlMessages
                      id="sidebar.listType.withDivider"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/list-type/card-list">
                  <Link to="/custom-views/list-type/card-list">
                    <span><IntlMessages
                      id="sidebar.listType.cardListView"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="eCommerce" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-shopping-cart"/><span><IntlMessages
                         id="sidebar.eCommerce"/></span></span>}>
                <Menu.Item key="custom-views/eCommerce/product-grid">
                  <Link to="/custom-views/eCommerce/product-grid">
                    <span><IntlMessages
                      id="sidebar.eCommerce.productGrid"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/eCommerce/product-list">
                  <Link to="/custom-views/eCommerce/product-list">
                    <span><IntlMessages
                      id="sidebar.eCommerce.productList"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="errorPages" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-error"/><span><IntlMessages
                         id="sidebar.extraPages"/></span></span>}>

                <Menu.Item key="custom-views/error-pages/error-404">
                  <Link to="/custom-views/error-pages/error-404">
                    <span><IntlMessages
                      id="sidebar.extraPages.404"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/error-pages/error-500">
                  <Link to="/custom-views/error-pages/error-500">
                    <span><IntlMessages
                      id="sidebar.extraPages.500"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="extra-elements" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-ellipse-h"/><span><IntlMessages
                         id="sidebar.listType.extras"/></span></span>}>
                <Menu.Item key="custom-views/extras/pricing-table">
                  <Link to="/custom-views/extras/pricing-table">
                    <span><IntlMessages
                      id="sidebar.extraElements.pricingTable"/></span></Link>
                </Menu.Item>

                <Menu.Item key="custom-views/extras/callouts">
                  <Link to="/custom-views/extras/callouts">
                    <span><IntlMessages
                      id="sidebar.extraElements.callouts"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/extras/testimonials">
                  <Link to="/custom-views/extras/testimonials">
                    <span><IntlMessages
                      id="sidebar.extraElements.testimonials"/></span></Link>
                </Menu.Item>
              </SubMenu>

            </MenuItemGroup>

            <MenuItemGroup key="documents" className="gx-menu-group" title={<IntlMessages id="sidebar.documents"/>}>

              <Menu.Item key="documents/changelog">
                <Link to="/documents/changelog">
                  <i className="icon icon-timeline-new"/>
                  <span><IntlMessages id="sidebar.documents.changelog"/></span>
                </Link>
              </Menu.Item>

              <Menu.Item key="documents/installation">
                <Link to="/documents/installation">
                  <i className="icon icon-steps"/>
                  <span><IntlMessages id="sidebar.documents.installation"/></span>
                </Link>
              </Menu.Item>

            </MenuItemGroup>

          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

export default React.memo(SidebarContent);

