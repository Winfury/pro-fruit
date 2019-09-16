var game = require('../scripts/main');
var Vue = require('vue');
var vm = new Vue.default({
    el:'#vm',
    data:{
        sence:''
    },
    created(){
        game.start();
    }
});


