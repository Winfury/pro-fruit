var game = require('../scripts/main');
var Vue = require('vue');
var index_css = require('./index.css');

var indexComponet = require('./index.vue').default;
Vue.default.prototype.$game = game;
Vue.default.prototype.$store = {
    sence: 'entry',
    set(vm,key,value){
        this[key] = value;
        vm[key] = value
    }
};

var vm = new Vue.default({
    el: '#vm',
    template: '<indexComponet/>',
    components: { indexComponet },
    data: {
    },
    mounted() {
    },

});

module.exports = vm;
