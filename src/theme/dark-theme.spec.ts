import { DarkTheme } from './dark-theme';

describe('DarkTheme', () => {
  describe('Token Colors', () => {
    test('should have correct token colors', () => {
      const { token } = DarkTheme;

      expect(token.colorPrimary).toBe('#1890ff');
      expect(token.colorBgBase).toBe('');
      expect(token.colorBorderSecondary).toBe('#333');
      expect(token.colorBorder).toBe('#333');
      expect(token.colorText).toBe('#fff');
      // Add more assertions for other token colors...
    });
  });

  describe('Component Styles', () => {
    test('should have correct component styles', () => {
      const { components } = DarkTheme;

      expect(components.Layout.headerBg).toBe('#141414');
      expect(components.Layout.bodyBg).toBe('#000');

      expect(components.Tabs.itemActiveColor).toBe('#1890ff');
      expect(components.Tabs.inkBarColor).toBe('#1890ff');

      expect(components.Card.borderRadiusLG).toBe(12);

      expect(components.Input.colorBgContainer).toBe('#222');
      expect(components.Input.colorBorder).toBe('#444');

      expect(components.Checkbox.colorBgLayout).toBe('#222');

      // expect(components.Button.colorBorder).toBe('#7056DC');
      expect(components.Button.colorText).toBe('#1890ff');

      expect(components.Select.optionSelectedBg).toBe('#303030');

      expect(components.Menu.itemColor).toBe('#8f8888');
      expect(components.Menu.itemSelectedBg).toBe('#303030');
      expect(components.Menu.itemSelectedColor).toBe('#fff');
      expect(components.Menu.itemHoverBg).toBe('#303030');
      expect(components.Menu.itemActiveBg).toBe('#303030');
    });
  });
});
