import React, {useEffect} from 'react';
import {ConfigProvider} from 'antd';
import {IntlProvider} from "react-intl";
import {useSelector} from "react-redux";
import AppLocale from "../../../lngProvider";

const LocaleProvider = (props) => {
  const locale = useSelector(({settings}) => settings.locale)
  const isDirectionRTL = useSelector(({settings}) => settings.isDirectionRTL)
  const currentAppLocale = AppLocale[locale.locale];

  useEffect(() => {
    if (locale)
      document.documentElement.lang = locale.locale;
  }, [locale]);

  useEffect(() => {
    if (isDirectionRTL) {
      document.documentElement.classList.add('rtl');
      document.documentElement.setAttribute('data-direction', 'rtl')
    } else {
      document.documentElement.classList.remove('rtl');
      document.documentElement.setAttribute('data-direction', 'ltr')
    }
  }, [isDirectionRTL]);

  return (
    <ConfigProvider locale={currentAppLocale.antd} direction={isDirectionRTL ? 'rtl' : 'ltr'}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>{props.children}</IntlProvider>
    </ConfigProvider>
  )
}

export default LocaleProvider;
