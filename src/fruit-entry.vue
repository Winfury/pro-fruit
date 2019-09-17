<template>
    <div class="fruit-entry fruit-body" >
        一共有 {{config.levels.length}} 关：
        <template v-for="(level,index) of config.levels">
            <p :key="index"> 第 {{index + 1}} 关：需要达到 {{level.score}} 分</p>
        </template>
        <button @click="gameStart"> 开始游戏 </button>
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
            gameStart(){
                this.$store.set(this, 'sence','game');
                this.$emit('change',{
                    sence: 'game'
                })
                this.$game.start();
            }
        }
    }
</script>

<style>
    
</style>