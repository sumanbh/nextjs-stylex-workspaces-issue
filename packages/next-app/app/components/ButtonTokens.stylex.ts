import * as stylex from '@stylexjs/stylex';
import { colors } from 'stylex-lib/colors.stylex';

export const buttonTokens = stylex.defineVars({
  bgColor: colors.blue12,
  textColor: 'white',
  cornerRadius: '4px',
  paddingBlock: '4px',
  paddingInline: '8px',
});
