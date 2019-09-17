module.exports = {
    curLevel: {
        score: 0,
        levelIndex: 0
    },
    levels: [
        {
            score: 30,
            Interval: 2000,
        },
        {
            score: 40,
            Interval: 1000,
        },
        {
            score: 50,
            Interval: 500,
        },
        {
            score: 60,
            Interval: 300,
        },
        {
            score: 70,
            Interval: 200,
        },
        {
            score: 80,
            Interval: 100,
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
        this.curLevel = {
            score: 0,
            levelIndex: 0
        }
        return this.curLevel;
    }
}