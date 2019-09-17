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