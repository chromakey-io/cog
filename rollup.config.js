import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'
import litcss from 'rollup-plugin-lit-css';

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
        preserveEntrySignatures: false,
        plugins: [
            resolve(),
            commonjs(),
            litcss(),
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
