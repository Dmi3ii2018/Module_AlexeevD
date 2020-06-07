const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = {
    entry: `./src/index.js`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `build`)
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    resolve: {
        extensions: [`.js`, `.jsx`]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            },
            {
                test: /\.css$/,
                use: [
                    `style-loader`,
                    MiniCssExtractPlugin.loader,
                    {
                        loader: `css-loader`,
                        options: { sourceMap: true }
                    }
                ]
            },
            {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
            }
        ],
    },
    devtool: `source-map`,
    watch: true,
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].css`,
        }),
    ]
};
