module.exports = {
    url:"http://jlt.023qx.net/game/showresult",
    curLevel: {
        score: 0,
        levelIndex: 0
    },
    levels: [
        {
            score: 1,
            Interval: 0, //已经禁用
        },
        {
            score: 50,
            Interval: 0,
        }, 
        {
<<<<<<< HEAD
            score: 100,
=======
            score: 150,
>>>>>>> ec67a3d3d9dd93a5210d1084a0a146931582a371
            Interval: 0,
        },
    ],
    setScore(score) {
        console.log(score);
        this.curLevel.score = score;
        if(this.curLevel.score === this.levels[this.curLevel.levelIndex].score ){
            this.levelUp();
        }
    },
    setLevelIndex(index) {
        this.curLevel.levelIndex = index;
    },
    getCurLevel() {
        return this.curLevel;
    },
    levelUp() {
        if (
            this.curLevel.levelIndex === this.levels.length - 1
        ) {
            return false;
        }
        this.curLevel = {
            score: 0,
            levelIndex: this.curLevel.levelIndex + 1
        }
        return this.levels[this.curLevel.levelIndex];
    },
    over() {
        this.curLevel = {
            score: 0,
            levelIndex: 0
        }
        return this.curLevel;
    }
}