// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
	entry: "./src/scripts/index.js",
	output: {
		filename: "main.js",
		path: path.resolve("dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Production",
			template: "./src/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		alias: {
			src: path.resolve("src"),
		},
	},
};