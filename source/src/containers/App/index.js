import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import URLSearchParams from 'url-search-params'
import {Redirect, Route, Switch, useHistory, useLocation, useRouteMatch} from "react-router-dom";
import {ConfigProvider} from 'antd';
import {IntlProvider} from "react-intl";

import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import {setInitUrl} from "appRedux/actions/Auth";
import {onLayoutTypeChange, onNavStyleChange, setThemeType} from "appRedux/actions/Setting";

import {
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED,
  LAYOUT_TYPE_FULL,
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL, THEME_TYPE_DARK
} from "../../constants/ThemeSetting";

const RestrictedRoute = ({component: Component, location, authUser, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: {from: location}
          }}
        />}
  />;

const setLayoutType = (layoutType) => {
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
};

const setNavStyle = (navStyle) => {
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
};

let styleSheetLink = document.createElement('link');
styleSheetLink.type = 'text/css';
styleSheetLink.rel = 'stylesheet';
document.body.appendChild(styleSheetLink);

const App = () => {
  const locale = useSelector(({settings}) => settings.locale);
  const navStyle = useSelector(({settings}) => settings.navStyle);
  const layoutType = useSelector(({settings}) => settings.layoutType);
  const themeColor = useSelector(({settings}) => settings.themeColor);
  const themeType = useSelector(({settings}) => settings.themeType);
  const isDirectionRTL = useSelector(({settings}) => settings.isDirectionRTL);

  const dispatch = useDispatch();
  const {authUser, initURL} = useSelector(({auth}) => auth);

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    if (isDirectionRTL) {
      document.documentElement.classList.add('rtl');
      document.documentElement.setAttribute('data-direction', 'rtl')
    } else {
      document.documentElement.classList.remove('rtl');
      document.documentElement.setAttribute('data-direction', 'ltr')
    }

    if (themeColor) {
      styleSheetLink.href = `/css/${themeColor}.min.css`;
    }
  }, [themeColor, isDirectionRTL]);

  useEffect(() => {
    if (themeType === THEME_TYPE_DARK) {
      document.body.classList.add('dark-theme');
      styleSheetLink.href = "/css/dark_theme.min.css";
    } else if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      styleSheetLink.href = "";
    }
  }, [themeType]);

  useEffect(() => {
    if (locale)
      document.documentElement.lang = locale.locale;
  }, [locale]);

  useEffect(() => {
    if (initURL === '') {
      dispatch(setInitUrl(location.pathname));
    }
    const params = new URLSearchParams(location.search);

    if (params.has("theme")) {
      dispatch(setThemeType(params.get('theme')));
    }
    if (params.has("nav-style")) {
      dispatch(onNavStyleChange(params.get('nav-style')));
    }
    if (params.has("layout-type")) {
      dispatch(onLayoutTypeChange(params.get('layout-type')));
    }
  }, [location.search, dispatch, initURL, location.pathname]);

  useEffect(() => {
    setLayoutType(layoutType);
    setNavStyle(navStyle);
  }, [layoutType, navStyle]);

  useEffect(() => {
    if (location.pathname === '/') {
      if (authUser === null) {
        history.push('/signin');
      } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
        history.push('/main/dashboard/crypto');
      } else {
        history.push(initURL);
      }
    }
  }, [authUser, initURL, location, history]);

  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd} direction={isDirectionRTL ? 'rtl' : 'ltr'}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>

        <Switch>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <RestrictedRoute path={`${match.url}`} authUser={authUser} location={location}
                           component={MainApp}/>
        </Switch>
      </IntlProvider>
    </ConfigProvider>
  )
};

export default memo(App);
