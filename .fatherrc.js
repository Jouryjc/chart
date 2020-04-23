export default {
    entry: 'src/main.js',
    esm: {
        type: 'rollup'
    },
    cjs: {
        type: 'rollup'
    },
    doc: {
        themeConfig: {
            mode: 'dark'
        },
        base: 'src'
    }
}