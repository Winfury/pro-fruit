var rotate = require( "../factory/rotate" );
var tween = require( "../lib/tween" );
var newGame = require( "../../images/new-game.png" );

module.exports = rotate.create(newGame, 244, 231, 195, 195, 1e-5, tween.exponential.co, 500);