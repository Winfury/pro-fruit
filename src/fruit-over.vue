<template>
    <div class="fruit-entry fruit-body" v-if="sence === 'over'">
        游戏结束
        <button @click="gameStart"> 再玩一次 </button>
    </div>
</template>

<script>
    module.exports ={
        data: function(){
            return {
                sence: this.$store.sence
            }
        },
        methods:{
            gameStart(){
                this.$store.set(this, 'sence','1');
                this.$game.start();
            }
        }
    }
</script>

<style>
    
</style>