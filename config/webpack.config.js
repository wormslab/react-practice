module.exports = {
    entry: "./public/js/app.js",
    output: {
        path: './public/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
        ]
    }
};
