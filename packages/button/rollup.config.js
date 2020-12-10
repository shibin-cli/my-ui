import vue from 'rollup-plugin-vue'
import {
    terser
} from 'rollup-plugin-terser'
module.exports = {
    input: './index.js',
    output: {
        file: 'dist/index.js',
        format: 'es'
    },
    plugins: [
        vue({
            css: true,
            compileTemplate: true
        }),
        terser()
    ]
}