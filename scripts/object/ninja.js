var displacement = require( "../factory/displacement" );
var tween = require( "../lib/tween" );
var ninja = require( "../../images/ninja.png" );

module.exports = displacement.create(ninja, 244, 81, 315, -140, 315, 43, {
	show: tween.bounce.co,
	hide: tween.exponential.co
}, 1e3);