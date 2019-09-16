var rotate = require( "../factory/rotate" );
var tween = require( "../lib/tween" );
var quit_png = require("../../images/quit.png");

module.exports = rotate.create(quit_png, 493, 311, 141, 141, 1e-5, tween.exponential.co, 500);