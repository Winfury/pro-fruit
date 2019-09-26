<template>
  <div class="fruit-over fruit-body">
    <div class="coupon">
      <div class="coupon-title">{{data.title}}</div>
      <div class="coupon-content">{{data.content}}</div>
      <div class="coupon-card">{{data.couponName}}</div>
      <div class="coupon-submit" @click="submit">点击确认</div>
    </div>
  </div>
</template>

<script>
var config = require("./config");
module.exports = {
  data: function() {
    return {
        data:JSON.parse(localStorage.getItem('overData'))
    };
  },
  computed: {
    sence() {
      return window.store.sence;
    }
  },
  methods: {
      submit(){
          alert('这个是跳转');
      }
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
  background-size: 110% auto;
  background-repeat: no-repeat;
}
.coupon .coupon-title {
  position: absolute;
  width: 100%;
  top: 33.5%;
  font-size: 28px;
  color: #fff;
  font-weight: 900;
  text-align: center;
}
.coupon .coupon-content {
  position: absolute;
  width: 100%;
  top: 42%;
  font-size: 12px;
  line-height: 14px;
  width: 94%;
  margin: 0 3%;
  color: #fff;
  text-align: center;
}

.coupon .coupon-card {
  position: absolute;
  width: 100%;
  top: 48.6%;
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  color: #fe287d;
  background-image: url(../images/box-bg.png);
  background-position: center;
  background-size: 40% 100% ;
  background-repeat: no-repeat;
  text-align: center;
}


.coupon .coupon-submit {
  position: absolute;
  width: 30%;
  left: 35%;
  top: 63%;
  font-size: 13px;
  height: 22px;
  line-height: 22px;
  color: #f1eb34;
  border: 1px solid #fff;
  border-radius: 12px;
  text-align: center;
}

</style>