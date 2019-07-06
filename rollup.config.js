import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  typescript(),
  commonjs(),
  resolve(),
  terser(),
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'cjs/index.js',
      format: 'cjs',
    },
    {
      file: 'esm/index.js',
      format: 'esm',
    },
  ],
  plugins
};
