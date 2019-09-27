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


</style>