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
        console.log();
        if (window.urlSearch.get("new")) {
            localStorage.setItem('times', 0);
            window.urlSearch.delete('new');
            window.location.search = window.urlSearch.toString();
        }
        if(this.getNowFormatDate() !== localStorage.getItem('date')){
            localStorage.setItem('times', 0);
            localStorage.setItem('date', this.getNowFormatDate())
        }
        if(parseInt(localStorage.getItem('times')) > 2){
            alert('一天最多只有3次游戏机会 ！');
            window.store.set('sence','over')
            return;
        }
        if (window.urlSearch.get("play")) {
            this.$game.start();
        }else{
            window.store.set('sence','over')
        }
    },
    methods:{
        getNowFormatDate() {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        },
    }
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
