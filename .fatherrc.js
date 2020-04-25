export default {
    entry: 'src/main.js',
    esm: {
        type: 'rollup',
        minify: true,
        mjs: true
    },
    cjs: {
        type: 'rollup',
        minify: true
    },
    umd: {
        minFile: true,
        sourcemap: true,
        name: 'chart'
    },
    doc: {
        themeConfig: {
            mode: 'light'
        },
        base: 'doc'
    }
}