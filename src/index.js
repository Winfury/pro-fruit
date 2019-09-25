var game = require('../scripts/main');
var Vue = require('vue');
var index_css = require('./index.css');
const axios = require('axios');

var indexComponet = require('./index.vue').default;
window.store = {
    sence: 'game',
    data: {},
    set(key, value) {
        this[key] = value;
    }

}
Vue.default.prototype.$game = game;

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
        getGameInfo().then(data => {
            window.store.data = data;
            this.$game.start();
            console.log(window.store);
        })
    },

});

module.exports = vm;

function getGameInfo() {
    return new Promise((reslove, reject) => {

        
        reslove({
            sale: {
                title: '',
                content: '',
            },
            status: 0,
        })


        axios.get('/Game/GetGameData')
            .then(res => {
                reslove(res)
            }).catch(err => {
                console.error();
                reject(err)
            })
    })
}
