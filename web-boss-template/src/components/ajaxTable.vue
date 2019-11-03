<template>
  <div style="height:100%;padding:0 6px">
    <el-table :data="tableData" border :height="tableHeight||'100%'" style="width: 100%">
      <el-table-column
        v-for="(column,index) in columns"
        v-bind:key="index"
        :fixed="column.fixed"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
      >
        <template slot-scope="scope">{{column.render?column.render(scope.row):scope.row[column.prop]}}</template>
      </el-table-column>
    </el-table>
    <div class="block ajax-pagination">
        <el-button :type="btn.type" v-bind:key="index" v-for="(btn,index) in listbtn" @click="btn.event()" size="mini">{{btn.text}}</el-button>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listTotal"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ajaxTable",
  props: {
    columns: Array,
    listbtn:Array,
    getData: Function,
    tableHeight:String,
    params:Object
  },
  data() {
    return {
      tableData: [],
      currentPage: 1,
      listTotal: 0,
      pageSize: 10
    };
  },
  methods: {
    getList() {
      this.getData({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        ...this.params
      }).then(list => {
        this.tableData = list.list;
        this.currentPage = list.page;
        this.listTotal = list.total;
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang="scss">
    .ajax-pagination{
        padding: 10px 0;
        position: absolute;
        bottom: 0;
        width: calc(100% - 12px);
        .el-pagination{
            float: right;
            margin-right: 12px;
        }
        .el-button{
            margin-right: 12px;
        }
    }
</style>