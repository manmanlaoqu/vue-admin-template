<template>
  <div>{{name}}
    <el-button @click="addDetail(1)">添加页面</el-button>
    <el-button @click="addDetail(2)">添加页面</el-button>
    <el-button @click="addDetail(3)">添加页面</el-button>
  </div>
</template>


<script>

export default {
  name: "home",
  data() {
    return {
      name: "home",
    };
  },
  methods: {
    init() {
      this.$axios.post('/web/resource/driver/list').then( res => {
        
      })
      setInterval(() => {
        this.name = Date.now();
      });
    },
    addDetail(index){
    this.$store.dispatch("addTab", {
      page:'/detail',
      name:'订单详情'+index,
      title:'订单详情'+index,
    });
    }
  },
  created() {
    this.init();
  }
};

</script>