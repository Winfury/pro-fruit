var displacement = require( "../factory/displacement" );
var tween = require( "../lib/tween" );
var mask = require( "../../images/home-mask.png" );

module.exports = displacement.create(mask, 640, 183, 0, -183, 0, 0, tween.exponential.co, 1e3);