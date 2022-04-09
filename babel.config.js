module.exports = function (api) {
    api.cache(true);

    // enable preset-env and preset-react by adding it to the presets array
    const presets = ["@babel/preset-env", "@babel/preset-react"];
    const plugins = ["macros"];

    return {
        presets,
        plugins
    };
}