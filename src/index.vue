<template>
  <div class="fruit-index">
    <fruit-level v-if="sence === 'game'"/>
    <fruit-entry v-if="sence === 'entry'" />
    <fruit-over v-if="sence === 'over'" />
  </div>
</template>

<script>
var fruitEntry = require("./fruit-entry.vue").default;
var fruitLevel = require("./fruit-level.vue").default;
var fruitOver = require("./fruit-over.vue").default;
var config = require("./config").default;

module.exports = {
  name: "fruit-index",
  components: {
    fruitEntry,
    fruitLevel,
    fruitOver
  },
  data: function() {
    return {
      sence: window.store.sence
    };
  },
  computed: {
  },
  mounted() {
    setInterval(()=>{this.sence = window.store.sence},300)
  },
  methods: {
    change(res) {}
  }
};
</script>

<style>
</style>