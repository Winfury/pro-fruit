var game = require('../scripts/main');
var Vue = require('vue');
var index_css = require('./index.css');
const axios = require('axios');
require('url-search-params-polyfill');

var indexComponet = require('./index.vue').default;
window.store = {
    sence: 'game',
    data: {},
    set(key, value) {
        this[key] = value;
    }

}
window.urlSearch = new URLSearchParams(window.location.search);
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
        if (window.urlSearch.get("new")) {
            localStorage.setItem('times', 0);
            window.urlSearch.delete('new');
            window.location.search = window.urlSearch.toString();
        }
        if (window.urlSearch.get("play")) {
            this.$game.start();
        }
    },

});

module.exports = vm;

window.submit = function (times,level ,score) {
    return new Promise((reslove, reject) => {
        axios.get(`http://jlt.023qx.net/game/getgamedata?times=${times}&grade=${level}`)
            .then(res => {
                reslove(res.data.data)
                console.log(res.data.data);
            }).catch(err => {
                console.error();
                reject(err)
            })
    })
}
