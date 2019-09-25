<template>
    <div class="fruit-level"  >
        第 {{config.curLevel.levelIndex + 1}} 关
    </div>
</template>

<script>
    var config = require("./config");

    module.exports ={
        data: function(){
            return {
                config:config
            }
        },
        methods:{
        }
    }
</script>

<style>
</style>