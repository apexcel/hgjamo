import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from './package.json'

const config = {
    input: 'src/index.ts',
    output: [
        {
            sourcemap: true,
            file: pkg.main,
            format: "cjs",
        },
        {
            sourcemap: true,
            file: pkg.module,
            format: "esm",
        },
        {
            sourcemap: true,
            file: pkg.browser,
            format: "esm",
        },
    ],
    plugins: [
        resolve({ extensions: ['.ts'] }),
        babel({ exclude: "node_modules/**" }),
        commonjs({ include: "node_modules/**" }),
        typescript({ tsconfig: "./tsconfig.json", clean: true }),
        terser(),
    ],
};
export default config;