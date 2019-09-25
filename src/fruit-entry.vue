<template>
    <div class="fruit-entry fruit-body" > 
        <button @click="gameStart"> 开始游戏 </button>
    </div>
</template>

<script>
    var config = require("./config");

    module.exports ={
        data: function(){
            return {
                config:config,
            }
        },
        methods:{
            gameStart(){
            }
        }
    }
</script>

<style>
    
</style>