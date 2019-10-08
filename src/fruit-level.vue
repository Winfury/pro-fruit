<template>
<div>
  <div class="fruit-level">第 {{config.curLevel.levelIndex + 1}} 关</div>
  <div class="level-up" v-if="alert">真厉害，恭喜进入第 {{config.curLevel.levelIndex + 1}} 关</div>
</div>
</template>

<script>
var config = require("./config");

module.exports = {
  data: function() {
    return {
      config: config,
      oldLevel: null,
      alert:false,
    };
  },
  mounted() {
    setInterval(() => {
        if (this.config.curLevel.levelIndex !== this.oldLevel && this.config.curLevel.levelIndex !== 0){
            this.alert= true;
            this.oldLevel = this.config.curLevel.levelIndex;
            setTimeout(()=>{
                this.alert = false;
            },2000)
        }
    }, 100);
  },
  methods: {}
};
</script>

<style>
</style>