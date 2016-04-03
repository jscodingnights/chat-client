function getEntrySources(sources) {
    if (process.env.NODE_ENV !== "production") {
        sources.push("webpack-dev-server/client?http://localhost:8080");
    }

    return sources;
}

module.exports = {
    entry: {
        index: getEntrySources([
            "./src/index.jsx",
        ]),
    },
    output: {
        publicPath: "http://localhost:8080/",
        filename: "./build/[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            {
                test: /\.jsx?$/,
                loaders: ["babel?presets[]=es2015&presets[]=react"],
                exclude: /node_modules/
            },
        ]
    }
};
