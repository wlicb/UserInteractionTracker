const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");

module.exports = {
    devtool: 'inline-source-map',
    entry: {
      popup: path.join(srcDir, 'popup.ts'),
      background: path.join(srcDir, 'background_test.ts'),
      content_script: path.join(srcDir, 'content_script_test.ts'),
      injected: path.join(srcDir, 'injected.ts'),
    },
    output: {
        path: path.join(__dirname, "../dist/js"),
        filename: "[name].js",
        publicPath: '/dist/',
    },
    optimization: {
        splitChunks: {
            name: "vendor",
            chunks(chunk) {
              return chunk.name !== 'background';
            }
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                      loader: 'ts-loader',
                      options: {
                        transpileOnly: true
                      }
                    }
                  ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: "../", context: "public" }],
            options: {},
        }),
    ],
};
