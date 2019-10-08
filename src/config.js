module.exports = {
    url:"http://jlt.023qx.net/game/showresult",
    curLevel: {
        score: 0,
        levelIndex: 0
    },
    levels: [
        {
            score: 10,
            Interval: 0, //已经禁用
        },
        {
            score: 20,
            Interval:0,
        }, 
        { 
            score: 30,
            Interval: 0, 
        },
    ],
    setScore(score) {
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
        return this.curLevel;
    }
}