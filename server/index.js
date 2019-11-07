require("asset-require-hook")({
    extensions: ["svg", "css", "less", "jpg", "png", "gif"]
});
require("babel-core/register")();
require("babel-polyfill");
require("./app");
