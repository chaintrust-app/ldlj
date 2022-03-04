import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import image from '@rollup/plugin-image';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup'
import { terser } from "rollup-plugin-terser";

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
            peerDepsExternal(),
            resolve({
                browser: true, // This instructs the plugin to use
                               // the "browser" property in package.json
            }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            url(),
            svgr({ icon: true }),
            json(),
            image({
                extensions: /\.(png|jpg|jpeg|gif|svg)$/,
                limit: 10000
            }),
            terser()
        ],
        external: ["react", "react-dom", "styled-components"]
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];
