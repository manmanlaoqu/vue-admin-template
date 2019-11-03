<template>
  <div style="height:100%;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small" style="padding:0 6px">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item> 
      <el-form-item>
        <el-button type="primary" size="mini" @click="refreshTable">查询</el-button>
      </el-form-item>
    </el-form>
    <AjaxTable
      :columns="columns"
      :getData="getData"
      tableHeight="calc(100% - 103px)"
      :params="formInline"
      :listbtn="listbtn"
      ref="table"
    ></AjaxTable>
  </div>
</template>

<script>
import AjaxTable from "../../../components/ajaxTable";

export default {
  components: {
    AjaxTable: AjaxTable
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      columns: [
        {
          prop: "data",
          label: "日期",
          width: "150"
        },
        {
          prop: "name",
          label: "姓名",
          width: "150",
          render: row => {
            return "hello " + row.name;
          }
        },
        {
          prop: "province",
          label: "省份",
          width: "150"
        },
        {
          prop: "city",
          label: "市区",
          width: "150"
        },
        {
          prop: "address",
          label: "地址",
          width: "150"
        },
        {
          prop: "address",
          label: "地址",
          width: "150"
        },
        {
          prop: "address",
          label: "地址",
          width: "150"
        },
        {
          prop: "address",
          label: "地址",
          width: "150"
        }
      ],
      listbtn: [
        {
          className: "",
          type: "primary",
          text: "导出",
          event: () => {
            this.exportData();
          }
        },{
          className: "",
          type: "primary",
          text: "新增",
          event: () => {
            alert('xinzeng');
          }
        }
      ],
      getData(params) {
        console.log(params);
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              list: [
                {
                  date: "2016-05-03",
                  name: "王小虎",
                  province: "上海",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                },
                {
                  date: "2016-05-02",
                  name: "王小虎",
                  province: "上海",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                },
                {
                  date: "2016-05-04",
                  name: "王小虎",
                  province: "上海",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                },
                {
                  date: "2016-05-01",
                  name: "王小虎",
                  province: "上海",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                },
                {
                  date: "2016-05-01",
                  name: "王小虎",
                  province: "上海",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                },
                {
                  date: "2016-05-01",
                  name: "王小虎",
                  province: "上海",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                },
                {
                  date: "2016-05-01",
                  name: "王小虎",
                  province: "上海",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                },
                {
                  date: "2016-05-01",
                  name: "王小虎",
                  province: "上海",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                }
              ],
              page: params.currentPage,
              total: 120
            });
          }, 500);
        });
      }
    };
  },
  methods: {
    exportData() {
      alert("doexport");
    },
    refreshTable(){
        this.$refs.table.getList()
    }
  }
};
</script>