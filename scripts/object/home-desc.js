var displacement = require( "../factory/displacement" );
var tween = require( "../lib/tween" );
var desc= require("../../images/home-desc.png");

module.exports = displacement.create(desc, 161, 91, -161, 140, 7, 127, tween.exponential.co, 500);