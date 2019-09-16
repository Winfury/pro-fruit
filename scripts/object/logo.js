var displacement = require( "../factory/displacement" );
var tween = require( "../lib/tween" );
var logo = require( "../../images/logo.png" );

module.exports = displacement.create(logo, 288, 135, 17, -182, 17, 1, tween.exponential.co, 1e3);