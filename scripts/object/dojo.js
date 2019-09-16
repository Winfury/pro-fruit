var rotate = require( "../factory/rotate" );
var tween = require( "../lib/tween" );
var dojo_png = require("../../images/dojo.png")

module.exports = rotate.create(dojo_png, 41, 240, 175, 175, 1e-5, tween.exponential.co, 500);