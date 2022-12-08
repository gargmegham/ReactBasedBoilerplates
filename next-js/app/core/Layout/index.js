import React, {useEffect} from "react";
import {Layout} from "antd";
import {useDispatch, useSelector} from "react-redux";

import HorizontalDefault from "../Topbar/HorizontalDefault";
import HorizontalDark from "../Topbar/HorizontalDark";
import InsideHeader from "../Topbar/InsideHeader";
import AboveHeader from "../Topbar/AboveHeader";
import BelowHeader from "../Topbar/BelowHeader";
import Topbar from "../Topbar";
import {footerText} from "../../../util/config";
import {
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED,
  LAYOUT_TYPE_FULL,
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_DARK
} from "../../../constants/ThemeSetting";
import NoHeaderNotification from "../Topbar/NoHeaderNotification";
import {useRouter} from "next/router";
import {isUnRestrictedRoute, useAuth} from "../../../util/use-auth";
import CircularProgress from "../../components/CircularProgress";
import {updateWindowWidth} from "../../../redux/actions";
import AppSidebar from "./AppSidebar";

const getContainerClass = (navStyle) => {
  switch (navStyle) {
    case NAV_STYLE_DARK_HORIZONTAL:
      return "gx-container-wrap";
    case NAV_STYLE_DEFAULT_HORIZONTAL:
      return "gx-container-wrap";
    case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
      return "gx-container-wrap";
    case NAV_STYLE_BELOW_HEADER:
      return "gx-container-wrap";
    case NAV_STYLE_ABOVE_HEADER:
      return "gx-container-wrap";
    default:
      return '';
  }
};

const getNavStyles = (navStyle) => {
  switch (navStyle) {
    case NAV_STYLE_DEFAULT_HORIZONTAL :
      return <HorizontalDefault/>;
    case NAV_STYLE_DARK_HORIZONTAL :
      return <HorizontalDark/>;
    case NAV_STYLE_INSIDE_HEADER_HORIZONTAL :
      return <InsideHeader/>;
    case NAV_STYLE_ABOVE_HEADER :
      return <AboveHeader/>;
    case NAV_STYLE_BELOW_HEADER :
      return <BelowHeader/>;
    case NAV_STYLE_FIXED :
      return <Topbar/>;
    case NAV_STYLE_DRAWER :
      return <Topbar/>;
    case NAV_STYLE_MINI_SIDEBAR :
      return <Topbar/>;
    case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
      return <NoHeaderNotification/>;
    case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR :
      return <NoHeaderNotification/>;
    default :
      return null;
  }
};

const {Content, Footer} = Layout;

const AppLayout = ({children}) => {
  const layoutType = useSelector(({settings}) => settings.layoutType);
  const navStyle = useSelector(({settings}) => settings.navStyle);
  const themeType = useSelector(({settings}) => settings.themeType);

  const router = useRouter();
  const {user, isLoadingUser} = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (themeType === THEME_TYPE_DARK) {
      document.body.classList.add('dark-theme');
    } else if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
    }
  }, [themeType]);

  useEffect(() => {
    if (layoutType === LAYOUT_TYPE_FULL) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('full-layout');
    } else if (layoutType === LAYOUT_TYPE_BOXED) {
      document.body.classList.remove('full-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('boxed-layout');
    } else if (layoutType === LAYOUT_TYPE_FRAMED) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('full-layout');
      document.body.classList.add('framed-layout');
    }
  }, [layoutType]);

  useEffect(() => {
    if (navStyle === NAV_STYLE_DEFAULT_HORIZONTAL ||
      navStyle === NAV_STYLE_DARK_HORIZONTAL ||
      navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL ||
      navStyle === NAV_STYLE_ABOVE_HEADER ||
      navStyle === NAV_STYLE_BELOW_HEADER) {
      document.body.classList.add('full-scroll');
      document.body.classList.add('horizontal-layout');
    } else {
      document.body.classList.remove('full-scroll');
      document.body.classList.remove('horizontal-layout');
    }
  }, [navStyle]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateWindowWidth(window.innerWidth));
    })
  }, [dispatch]);

  useEffect(() => {
    if (!isLoadingUser) {
      if (!user && !isUnRestrictedRoute(router.pathname)) {
        router.push('/signin').then(r => r);
      } else if (user && isUnRestrictedRoute(router.pathname)) {
        router.push('/main/dashboard/crm').then(r => r);
      }
    }
  }, [user, isLoadingUser, router.pathname])

  if (isLoadingUser) {
    return <div className="gx-loader-view">
      <CircularProgress/>
    </div>;
  }

  return isUnRestrictedRoute(router.pathname) ? children : (
    <Layout className={`gx-app-layout`}>
      <AppSidebar navStyle={navStyle}/>
      <Layout>
        {getNavStyles(navStyle)}
        <Content className={`gx-layout-content ${getContainerClass(navStyle)}`}>
          <div className="gx-main-content-wrapper">
            {children}
          </div>
          <Footer>
            <div className="gx-layout-footer-content">
              {footerText}
            </div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;

