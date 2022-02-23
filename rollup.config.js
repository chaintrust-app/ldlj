import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import image from '@rollup/plugin-image';
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import flatDts from 'rollup-plugin-flat-dts';
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
    {
        input: "lib/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            peerDepsExternal(),
            image({
                extensions: /\.(png|jpg|jpeg|gif|svg)$/,
                limit: 10000
            }),
            json(),
            terser(),
            flatDts(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
        external: ["react", "react-dom", "styled-components"]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];
