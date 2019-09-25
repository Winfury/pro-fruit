<template>
  <div class="fruit-over fruit-body" v-if="sence === 'over'">
    <div class="coupon">
      <div class="coupon-title">没有通关</div>
    </div>
  </div>
</template>

<script>
var config = require("./config");
module.exports = {
  data: function() {
    return {
      coupon: {
        ok: {
          title: `您真厉害!`,
          content: `恭喜您获得商家代金券`
        },
        fail: {
          title: `游戏未过三关`,
          content: `${window.store.data}`
        }
      }
    };
  },
  computed: {
    sence() {
      return window.store.sence;
    }
  },
  methods: {

  }
};
</script>

<style>
.fruit-over {
  background-color: #000;
}
.coupon {
  height: 100%;
  width: 100%;
  background-image: url(../images/coupon-bg.png);
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.coupon .coupon-title {
  position: absolute;
  width: 100%;
  top: 38%;
  font-size: 20px;
  color: #fff;
  font-weight: 900;
  text-align: center;
}
</style>