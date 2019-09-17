var game = require('../scripts/main');
var Vue = require('vue');
var index_css = require('./index.css');

var indexComponet = require('./index.vue').default;
Vue.default.prototype.$game = game;
Vue.default.prototype.$store = {
    sence: 'game',
    set(vm, key, value) {
        this[key] = value;
        vm[key] = value
    }
};

document.body.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });

var vm = new Vue.default({
    el: '#vm',
    template: '<indexComponet/>',
    components: { indexComponet },
    data: {
    },
    mounted() {
        this.$game.start();
    },

});

module.exports = vm;
