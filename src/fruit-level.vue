<template>
<<<<<<< HEAD
    <div class="fruit-level"  >
=======
    <div class="fruit-level" >
>>>>>>> 98738b4007fe30e0390be367171a329096c16140
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
</style>