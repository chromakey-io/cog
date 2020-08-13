import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'

//import babel from "rollup-plugin-babel";
//import preset from "@babel/preset-env";
//import style from 'rollup-plugin-lit-html-style';
 
//const esmodules = true;

const production = !process.env.ROLLUP_WATCH;

const cssOptions = () => ({
  extensions: [".scss", ".sass"],
  extract: false,
  minimize: true,
  use: [
    [
      "sass",
      {
        includePaths: [
          "./src",
          "./node_modules",
        ]
      }
    ]
  ]
});

export default [
    {
        input: 'src/index.js',
        plugins: [
            resolve(),
            commonjs(),
            postcss(cssOptions()),
            production && terser()
        ],
        output: {
            dir: 'dist/',
            format: 'es',
            sourcemap: true
        }
    },
/*
    {
        input: 'src/styles.js',
        plugins: [
            resolve(),
            commonjs(),
            style({esmodules}),
            babel({
                extensions: [".js", ".scss"],
                presets: [[preset, { targets: {esmodules} }]]
            }),
            production && terser()
        ],
        output: {
            file: 'dist/styles.js',
            format: 'es',
            sourcemap: true
        }
    }*/
];
