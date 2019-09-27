<template>
  <div class="fruit-over fruit-body">
    <div class="coupon">
      <div class="coupon-title">{{data.title}}</div>
      <div class="coupon-content">{{data.content}}</div>
      <div class="coupon-card">{{data.couponName}}</div>
      <div class="coupon-submit-1" @click="submit(0)">直接领奖</div>
      <div class="coupon-submit-2" @click="submit(1)">支付并领奖</div>
    </div>
  </div>
</template>

<script>
var config = require("./config");
const axios = require("axios");
module.exports = {
  data: function() {
    return {
      data: JSON.parse(localStorage.getItem("overData"))
    };
  },
  computed: {
    sence() {
      return window.store.sence;
    }
  },
  methods: {
    submit(type) {
      this.getInfo(res => {
        // 直接领奖
        if (type === 0) {
          //未注册
          if (res === 0) {
          alert("领取失败，请注册！");
            window.location.href = "注册页面";
            return;
          }
          //已经注册
          if (res === 1) {
            alert("领取成功！");
            window.location.href = "流程结束";
            return;
          }
        }
        // 领奖并支付
        if (type === 1) {
          //未注册
          if (res === 0) {
            alert("领取失败，请注册！");
            window.location.href = "注册页面";
            return;
          }
          //已经注册
          if (res === 1) {
            alert("领取成功，请支付！");
            window.location.href = `支付页面?pay=${this.data.pay}`;
            return;
          }
        }
      });
    },
    getInfo(callback) {
      let times = parseInt(localStorage.getItem("times"));
      var levelIndex = 0;
      var scoreNumber = localStorage.getItem("scoreNumber");
      for (var i = 0; i < config.levels.length; i++) {
        if (scoreNumber >= config.levels[i].score) {
          levelIndex = i + 1;
          break;
        }
      }
      axios
        .get(
          `http://jlt.023qx.net/game/DrawGameTicket?times=${times}&grade=${levelIndex}`
        )
        .then(res => {
          callback(res.data.data);
        })
        .catch(err => {
          console.error();
        });
    }
  }
};
</script>

<style>
</style>