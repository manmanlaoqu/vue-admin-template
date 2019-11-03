<template>
  <div class="template page" :is="template"></div>
</template>

<script>

import Vue from "vue";
import Loading from '../components/loadPage'

export default {
  name: "child1",
  props: {
    page: String,
    name:String
  },
  data() {
    return {
      template: Loading
    };
  },
  mounted() {
    const Page = ()=>import(`./pages${this.page}/index.vue`)
    this.template = Page
    let that = this
    Vue.EventDispatch.on(this.name+'Fresh',function(){
        that.template = Loading
        setTimeout(function(){
            that.template = Page
        },50)
    })
  }
};
</script>

<style lang="scss" scoped>
    .template.page{
        height: 100%;
    }
</style>