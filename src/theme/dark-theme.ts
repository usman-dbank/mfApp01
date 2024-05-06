import { DefaultTheme } from './default-theme';

export const DarkTheme = {
  token: {
    ...DefaultTheme.token,
    colorBgBase: '',
    colorBorderSecondary: '#333',
    colorBorder: '#333',
    colorText: '#fff'
  },
  components: {
    Layout: {
      headerBg: '#141414',
      bodyBg: '#000'
    },
    Tabs: {
      ...DefaultTheme.components.Tabs,
      itemActiveColor: '#1890ff',
      inkBarColor: '#1890ff'
    },
    Card: {
      ...DefaultTheme.components.Card,
      borderRadiusLG: 12
    },
    Input: {
      ...DefaultTheme.components.Input,
      colorBgContainer: '#222',
      colorBorder: '#444'
    },
    Checkbox: {
      ...DefaultTheme.components.Checkbox,
      colorBgLayout: '#222'
    },
    Button: {
      ...DefaultTheme.components.Button
    },
    Select: {
      ...DefaultTheme.components.Select,
      optionSelectedBg: '#303030'
    },
    Menu: {
      itemColor: '#8f8888',
      itemSelectedBg: '#303030',
      itemSelectedColor: '#fff',
      itemHoverBg: '#303030',
      itemActiveBg: '#303030'
    }
  }
};
