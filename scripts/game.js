/**
 * game logic
 */
var timeline = require("./timeline");
var Ucren = require("./lib/ucren");
var sound = require("./lib/sound");
var fruit = require("./factory/fruit");
var score = require("./object/score");
var message = require("./message");
var state = require("./state");
var lose = require("./object/lose");
var gameOver = require("./object/game-over");
var knife = require("./object/knife");
// var sence = require( "sence" );
var background = require("./object/background");
var light = require("./object/light");
var config = require("../src/config");

var scoreNumber = 0;

var random = Ucren.randomNumber;

var volleyNum = 3, volleyMultipleNumber = 6;
var fruits = [];
var gameInterval;

var snd;
var boomSnd;

// fruit barbette
var barbette = function () {
    if (fruits.length >= volleyNum)
        return;

    var startX = random(640), endX = random(640), startY = 600;
    var f = fruit.create(startX, startY).shotOut(0, endX);

    fruits.push(f);
    snd.play();

    barbette();
};

// start game
exports.start = function () {
    snd = sound.create("sound/throw");
    boomSnd = sound.create("sound/boom");
    timeline.setTimeout(function () {
        state("game-state").set("playing");
        gameInterval = timeline.setInterval(barbette, config.levels[config.curLevel.levelIndex].Interval);
    }, 500);
};

exports.gameOver = function () {
    config.over();
    gameInterval.stop();  
    var levelIndex = 0
    for (var i=0; i < config.levels.length; i++) {
        if (scoreNumber >= config.levels[i].score) {
            levelIndex = i + 1;
            break;
        }
    }
    localStorage.setItem('scoreNumber', scoreNumber);
    let curTimes = parseInt(localStorage.getItem('times')) + 1;
    localStorage.setItem('times', curTimes);
    window.submit(curTimes , levelIndex, scoreNumber).then(data => {
        window.store.data = data;
        localStorage.setItem('overData',JSON.stringify(window.store.data))
        window.store.set('sence','over');
        window.urlSearch.delete('play');
        window.location.search = window.urlSearch.toString();
    })
    volleyNum = 2;
    fruits.length = 0;
};

exports.applyScore = function (score) {
    if (score > volleyNum * volleyMultipleNumber)
        volleyNum++ ,
            volleyMultipleNumber += 10;
};

exports.sliceAt = function (fruit, angle) {
    var index;

    if (state("game-state").isnot("playing"))
        return;

    if (fruit.type != "boom") {
        fruit.broken(angle);
        if (index = fruits.indexOf(fruit))
            fruits.splice(index, 1);
        score.number(++scoreNumber);
        this.applyScore(scoreNumber);
        config.setScore(scoreNumber);
    } else {
        boomSnd.play();
        this.pauseAllFruit();
        background.wobble();
        light.start(fruit);
    }
};

exports.pauseAllFruit = function () {
    gameInterval.stop();
    knife.pause();
    try{
        fruits.invoke("pause");
    }catch(err){
        console.error(err);
        this.gameOver();
    }
};

// message.addEventListener("fruit.fallOff", function( fruit ){
// 	var index;
// 	if( ( index = fruits.indexOf( fruit ) ) > -1 )
// 	    fruits.splice( index, 1 );
// });

message.addEventListener("fruit.remove", function (fruit) {
    var index;
    if ((index = fruits.indexOf(fruit)) > -1)
        fruits.splice(index, 1);
});

var eventFruitFallOutOfViewer = function (fruit) {
    if (fruit.type != "boom")
        lose.showLoseAt(fruit.originX);
};

state("game-state").hook(function (value) {
    if (value == "playing")
        message.addEventListener("fruit.fallOutOfViewer", eventFruitFallOutOfViewer);
    else
        message.removeEventListener("fruit.fallOutOfViewer", eventFruitFallOutOfViewer);
});

message.addEventListener("game.over", function () {
    exports.gameOver();
    knife.switchOn();
});

message.addEventListener("overWhiteLight.show", function () {
    knife.endAll();
    for (var i = fruits.length - 1; i >= 0; i--)
        fruits[i].remove();
    background.stop();
});

message.addEventListener("click", function () {
    state("click-enable").off();
    gameOver.hide();
    message.postMessage("home-menu", "sence.switchSence");
});