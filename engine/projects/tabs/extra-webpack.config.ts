import { Configuration, DefinePlugin } from 'webpack';

/**
 * This is where you define your additional webpack configuration items to be appended to
 * the end of the webpack config.
 */
export default {
  entry: {
    index: {
      import: './projects/tabs/src/app/tabs/index.ts',
    },
  },
  externals: {
    lodash: 'lodash'
  }
} as Configuration;
