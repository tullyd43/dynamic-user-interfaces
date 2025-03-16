// const { merge } = require("webpack-merge");
// const common = require("./webpack.common.js");

import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
	mode: "production",
	devtool: "source-map",
});
