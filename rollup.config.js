import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from './package.json';
import dts from 'rollup-plugin-dts';

const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: "cjs",
            },
            // {
            //     file: pkg.module,
            //     format: "es",
            // },
            // {
            //     file: pkg.browser,
            //     format: "es",
            // },
        ],
        plugins: [
            resolve({ extensions: ['.ts'] }),
            babel({ exclude: "node_modules/**", babelHelpers: 'bundled' }),
            commonjs({ include: "node_modules/**" }),
            typescript({ tsconfig: "./tsconfig.json", clean: true }),
            terser(),
        ]
    },
    {
        input: "./src/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
]

export default config;