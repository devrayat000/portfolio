import path from 'path'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'
// import typescript from 'rollup-plugin-ts'
import json from '@rollup/plugin-json'
import graphql from '@rollup/plugin-graphql'
import del from 'rollup-plugin-delete'
// import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import typescriptPaths from 'rollup-plugin-tsconfig-paths'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import run from '@rollup/plugin-run'
import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'

// import pkg from './package.json'
const devMode = process.env.NODE_ENV === 'development'

const treeshake = {
  annotations: true,
  moduleSideEffects: false,
  propertyReadSideEffects: false,
  tryCatchDeoptimization: false,
  unknownGlobalSideEffects: false,
}

const basePlugins = [
  json(),
  typescript({
    rollupCommonJSResolveHack: true,
    useTsconfigDeclarationDir: true,
  }),
  typescriptPaths(),
  graphql(),
  replace({
    __DEV__: "process.env.NODE_ENV !== 'production'",
    preventAssignment: true,
  }),
]

/**
 * @type {import('rollup').RollupOptions}
 */
const devConfig = {
  input: './src/server.ts',
  watch: {
    include: 'src/**/*.{ts,graphql,json}',
    clearScreen: true,
  },
  treeshake,
  output: [
    {
      dir: './.server',
      // file: './.server/index.js',
      format: 'cjs',
      entryFileNames: '[name].js',
      chunkFileNames: 'chunks/[name]-[hash].js',
      strict: true,
      validate: true,
      sourcemap: true,
    },
  ],
  plugins: [
    ...basePlugins,
    replace({
      values: {
        'process.env.NODE_ENV': JSON.stringify('development'),
        preventAssignment: true,
      },
    }),
    del({
      targets: ['.server/chunks/*'],
      hook: 'buildEnd',
    }),
  ],
}

/**
 * @type {import('rollup').RollupOptions}
 */
const prodConfig = {
  input: ['./src/index.ts', './src/server.ts'],
  treeshake,
  output: [
    {
      dir: './build/cjs',
      // file: './build/cjs/index.js',
      format: 'cjs',
      entryFileNames: '[name].cjs.js',
      chunkFileNames: 'chunk-[hash].cjs.js',
      strict: true,
      validate: true,
    },
    {
      dir: './build/es',
      // file: './build/cjs/index.js',
      format: 'es',
      entryFileNames: '[name].es.js',
      chunkFileNames: 'chunk-[hash].es.js',
      strict: true,
      validate: true,
    },
  ],
  plugins: [
    del({ targets: path.resolve(__dirname, 'build', '*') }),
    ...basePlugins,
    replace({
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      },
    }),
    terser({
      ecma: 2020,
      mangle: { toplevel: true },
      format: { comments: false, quote_style: 1 },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: !devMode,
        drop_debugger: !devMode,
      },
    }),
  ],
}

if (process.env.ROLLUP_WATCH === 'true') {
  devConfig.plugins.push(
    run({
      // allowRestarts: true,
      execArgv: ['-r', 'source-map-support/register'],
      execPath: process.execPath,
    })
  )
}

const config = (() => {
  if (process.env.NODE_ENV === 'production') {
    return prodConfig
  } else {
    return devConfig
  }
})()

export default config
