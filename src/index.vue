<template>
  <div class="fruit-index">
    <fruit-level/>
    <fruit-entry v-if="sence === 'entry'" @change="change" />
    <fruit-over v-if="sence === 'over'" @change="change" />
  </div>
</template>

<script>
var fruitEntry = require("./fruit-entry.vue").default;
var fruitLevel = require("./fruit-level.vue").default;
var config = require("./config").default;

module.exports = {
  name: "fruit-index",
  components: {
    fruitEntry,fruitLevel
  },
  data: function() {
    return {
      sence: this.$store.sence
    };
  },
  computed:{
      curLevel(){
          return config.curLevel;
      }
  },
  mounted() {},
  methods: {
    change(res) {
      this.$store.set(this, "sence", res.sence);
    }
  }
};
</script>

<style>
</style>