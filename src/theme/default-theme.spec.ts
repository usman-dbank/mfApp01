import { DefaultTheme } from './default-theme';

describe('DefaultTheme', () => {
  test('should render token colors', () => {
    const { token } = DefaultTheme;

    expect(token.colorPrimary).toBe('#1890ff');

    expect(token.colorBgBase).toBe('#fff');

    expect(token.colorBorderSecondary).toBe('#d9d9d9');

    expect(token.borderRadius).toBe(8);

    expect(token.fontFamily).toBe('Inter Normal, sans-serif');

    expect(token.colorBgTextHover).toBe('#e6eeff');

    expect(token.greyColor).toBe('#8c8c8c');

    expect(token.blackColor).toBe('#000');

    expect(token.colorError).toBe('#ff0000');

    expect(token.colorIcon).toBe('#595959');

    expect(token.fontWeightStrong).toBe(600);

    expect(token.colorBorder).toBe('#d9d9d9');

    expect(token.colorInfo).toBe('#2f54eb');

    expect(token.iconColorBackground).toBe('#d3e2ff');

    expect(token.tagBackgroundColor).toBe('#e6f7ff');

    expect(token.menuSelectedBgColor).toBe('#e6eeff');

    expect(token.colorSuccessText).toBe('#52c41a');

    expect(token.colorSuccessBg).toBe('#f6ffed');

    expect(token.colorSuccessBorder).toBe('#b7eb8f');

    expect(token.fontSize).toBe(14);

    expect(token.colorErrorBg).toBe('#fff1f0');

    expect(token.colorErrorBorder).toBe('#ffa39e');

    expect(token.colorErrorText).toBe('#f5222d');

    expect(token.titleColor).toBe('#434343');

    expect(token.subTitleColor).toBe('#8c8c8c');

    expect(token.colorLink).toBe('#1890ff');

    expect(token.screenLG).toBe(1100);
    expect(token.screenXL).toBe(1400);

    expect(token.boxShadow).toBe('#888888');
  });

  test('should render component styles', () => {
    const { components } = DefaultTheme;

    expect(components.Card.borderRadiusLG).toBe(12);

    expect(components.Input.controlHeightLG).toBe(60);
    expect(components.Input.controlPaddingHorizontal).toBe(17);
    expect(components.Input.colorBgContainer).toBe('#fff');
    expect(components.Input.colorBorder).toBe('#d3d3d3');
    expect(components.Input.fontSize).toBe(14);
    expect(components.Input.fontWeightStrong).toBe(500);
    expect(components.Input.fontSizeLG).toBe(14);
    expect(components.Input.borderRadiusLG).toBe(8);

    expect(components.Checkbox.fontSize).toBe(14);
    expect(components.Checkbox.colorBgLayout).toBe('#ffffff');

    expect(components.Button.controlHeightLG).toBe(42);
    expect(components.Button.controlHeight).toBe(34);
    expect(components.Button.borderRadius).toBe(8);
    expect(components.Button.borderRadiusLG).toBe(8);
    expect(components.Button.borderRadiusSM).toBe(8);
    expect(components.Button.borderRadiusXS).toBe(8);
    expect(components.Button.colorText).toBe('#1890ff');

    expect(components.Select.borderRadius).toBe(8);
    expect(components.Select.borderRadiusSM).toBe(4);
    expect(components.Select.borderRadiusXS).toBe(4);
    expect(components.Select.borderRadiusLG).toBe(8);
  });
});
