import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-ts';

const plugins = [
  ts(),
  commonjs({ extensions: [ '.ts', '.js' ] }),
  resolve(),
  terser(),
];

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'cjs',
      format: 'cjs',
      exports: 'auto',
    },
    {
      dir: 'esm',
      format: 'esm',
    },
    {
      dir: 'umd',
      format: 'umd',
      name: 'semver',
    },
  ],
  plugins
};
