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
  width: 92%;
 margin: 0 4%;
  background-image: url(../images/coupon-bg.png);
  background-position: center;
  background-size: 120% auto;
  background-repeat: no-repeat;
  position: relative;
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
  top: 42%;
  font-size: 12px;
  line-height: 14px;
  width: 96%;
  margin: 0 2%;
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
  width: 40%;
  left: 30%;
  top: 63%;
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  color: #f1eb34;
  border: 1px solid #fff;
  border-radius: 12px;
  text-align: center;
}

</style>