'use client';

import * as stylex from '@stylexjs/stylex';
import { buttonTokens } from './ButtonTokens.stylex';
import ThemeableButton from './ThemeableButton';
import { testStyles } from 'stylex-lib';
import { colors } from 'stylex-lib/colors.stylex';

type Props = Readonly<{}>;

export default function ButtonsDemo(_props: Props) {
  const onClick = () => {
    console.log('click');
  };
  return (
    <div {...stylex.props(styles.container)}>
      <ThemeableButton onClick={onClick}>Vanilla Button</ThemeableButton>

      <ThemeableButton
        onClick={onClick}
        style={(styles.bordered, testStyles.base)}
      >
        Bordered Button
      </ThemeableButton>

      <ThemeableButton onClick={onClick} theme={redTheme}>
        Red Button
      </ThemeableButton>

      <div {...stylex.props(redTheme)}>
        <ThemeableButton onClick={onClick}>
          Red Button By inheritance
        </ThemeableButton>
      </div>

      <ThemeableButton
        onClick={onClick}
        style={[styles.bordered, styles.greenBorder]}
        theme={redTheme}
      >
        Red - Bordered Button
      </ThemeableButton>
    </div>
  );
}

const redTheme = stylex.createTheme(buttonTokens, {
  bgColor: colors.red12,
  textColor: 'white',
  cornerRadius: '4px',
  paddingBlock: '4px',
  paddingInline: '8px',
});

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingBottom: 64,
  },
  bordered: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'red',
  },
  greenBorder: {
    borderColor: 'green',
  },
});
