import {SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from "../../constants/ActionTypes";
import {LAYOUT_TYPE, NAV_STYLE, SET_PATH_NAME, THEME_TYPE, UPDATE_RTL_STATUS} from "../../constants/ThemeSetting";


export function toggleCollapsedSideNav(navCollapsed) {
  return {type: TOGGLE_COLLAPSED_NAV, navCollapsed};
}

export function updateWindowWidth(width) {
  return {type: WINDOW_WIDTH, width};
}

export function setThemeType(themeType) {
  return {type: THEME_TYPE, themeType};
}

export function onNavStyleChange(navStyle) {
  return {type: NAV_STYLE, navStyle};
}

export function onLayoutTypeChange(layoutType) {
  return (dispatch) => {
    dispatch({type: LAYOUT_TYPE, layoutType});
  }
}

export function setPathName(pathname) {
  return {type: SET_PATH_NAME, pathname};
}

export function switchLanguage(locale) {
  return {
    type: SWITCH_LANGUAGE,
    payload: locale
  };
}

export function setDirectionRTL(rtlStatus) {
  return (dispatch) => {
    dispatch({type: UPDATE_RTL_STATUS, rtlStatus});
  }
}
