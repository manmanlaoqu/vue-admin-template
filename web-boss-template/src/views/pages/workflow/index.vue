<template>
  <div>{{name}}</div>
</template>


<script>
import Vue from "vue";

export default {
  name: "home",
  data() {
    return {
      name: 1
    };
  },
  methods: {
    init() {
      setInterval(() => {
        this.name = this.name+1
      });
    }
  },
  created() {
    this.init();
  }
};
</script>