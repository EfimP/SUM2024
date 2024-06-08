//import resolve from "@rollup/plugin-node-resolve";

module.exports = {
    input: "main.js",
    output: {
        dir: "output",
        format: "iife",
        sourcemap: "inline"
    },
}