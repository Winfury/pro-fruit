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
                config:config,
                sence: this.$store.sence
            }
        },
        methods:{
        }
    }
</script>

<style>
    .fruit-level{
        width: 100%;
        height: 40px;
        position:absolute;
        left: 0;
        top: 10%;
        font-size: 40px;
        text-align: center;
        color: #fff;
        z-index: 101;
        display:none;
    }
</style>