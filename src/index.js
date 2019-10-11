var game = require('../scripts/main');
var Vue = require('vue');
var index_css = require('./index.css');
const axios = require('axios');
var config = require("./config");
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
        this.getInfo().then(res => {
            this.init(res)
        }).catch(err => {
            console.error(err);
        })
    },
    methods: {
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
        init(canPlay) {
            console.log('---',canPlay)
            if (!canPlay) {
                alert('一天最多只有3次游戏机会 ！');
                window.store.set('sence', 'over')
                // window.location.href='/user/index';
                return;
            }
            if (window.urlSearch.get("play")) {
                this.$game.start();
            } else {
                window.store.set('sence', 'over')
            }
        },
        getInfo() {
            return new Promise((reslove, reject) => {
                let storeid = window.urlSearch.get("storeid");
                axios.get(`${config.domain}game/CheckGameTimes?${storeid ? ('storeid=' + storeid) : ''}`)
                    .then(res => {
                        reslove(res.data)
                        console.log(res);
                    }).catch(err => {
                        console.error();
                        reject(err)
                    })
            })
        }
    }
});

module.exports = vm;

window.submit = function (times, level, score) {
    return new Promise((reslove, reject) => {
        axios.get(`${config.domain}game/getgamedata?grade=${score}`)
            .then(res => {
                reslove(res.data.data)
                console.log(res.data.data);
            }).catch(err => {
                console.error();
                reject(err)
            })
    })
}
