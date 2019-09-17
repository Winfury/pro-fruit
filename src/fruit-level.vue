<template>
    <div class="fruit-level"  >
        第 {{config.curLevel.levelIndex + 1}} 关
        {{config.curLevel}}
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
        height: 32px;
        position:absolute;
        left: 0;
        top: 7%;
        font-size: 32px;
        text-align: center;
        color: #ccc;
        z-index: 101;
        display:none;
    }
</style>