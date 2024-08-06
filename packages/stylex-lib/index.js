import * as stylex from '@stylexjs/stylex';

import { tokens } from './tokens.stylex';

export const testStyles = stylex.create({
  base: {
    backgroundColor: tokens.backgroundColor,
  },
});
