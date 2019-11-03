<template>
  <div id="app-box">
    <div id="menu">
      <el-menu
        @select="handleSelect"
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item,mIndex) in $store.state.menu">
          <el-submenu :index="mIndex+''" v-bind:key="mIndex" v-if="item.children">
            <template slot="title">
              <i :class="'el-icon-'+item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item
              :index="mIndex+'-'+index"
              v-bind:key="index"
              v-for="(menu,index) in item.children"
            >{{menu.title}}</el-menu-item>
          </el-submenu>
          <el-menu-item :index="mIndex+''" v-bind:key="mIndex" v-if="!item.children">
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div id="page">
      <div class="header">

      </div>
      <el-tabs
        v-model="$store.state.tabIndex"
        type="card"
        closable
        @tab-remove="removeTab"
      >
        <el-tab-pane v-for="item in $store.state.pages" :key="item.name" :name="item.name">
          <span slot="label">
            {{item.title}}
            <span class="el-icon-refresh" @click="refresh(item)"></span>
          </span>
          <pageTemplate :page="item.page" :name="item.name"/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <order></order>
    <my-component></my-component>
  </div>
</template>

<script>
import Vue from "vue";
import store from "../store";
import PageTemplate from "./Template.vue";

import Api from '../api/driver/driver'

export default {
  name: "main",
  components: {
    pageTemplate: PageTemplate
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    autoCollapsed() {
      if (window.innerWidth > 1280) {
        this.isCollapse = false;
        return;
      }
      if (window.innerWidth <= 1280) {
        this.isCollapse = true;
        return;
      }
    },
    init() {
        Api.addDriver()
      store.dispatch("setMenu", [
        {
          title: "首页",
          icon: "location",
          children: [
            {
              title: "工作台",
              page: "/workflow",
              name: "工作台-/workflow"
            }
          ]
        },
        {
          title: "订单管理",
          icon: "location",
          children: [
            {
              title: "我的订单",
              page: "/order",
              name: "我的订单-/order"
            }
          ]
        },
        {
          title: "其它",
          icon: "location",
          page: "/table",
          name: "其它-/table"
        }
      ]);
    },
    handleSelect(index) {
      let arr = index.split("-");
      let menu = this.$store.state.menu;
      arr.map(item => {
        menu = menu[item].children || menu[item];
      });
      this.$store.dispatch("addTab", menu);
    },
    removeTab(ele) {
      this.$store.dispatch("removeTab", ele);
    },
    refresh(page){
      Vue.EventDispatch.emit(page.name+'Fresh')
    }
  },
  mounted() {
    let resizeFn = Vue.Utils.throttle(this.autoCollapsed.bind(this._data), 100);
    window.onresize = function() {
      resizeFn();
    };
    this.init();
  }
};
</script>

<style lang="scss">
#app-box {
  height: 100%;
  display: flex;
  #menu {
    height: 100%;
    display: inline-block;
    .el-menu {
      height: 100%;
      width: 200px;
    }
    .el-menu.el-menu--collapse {
      width: 64px;
    }
  }
  #page {
    flex: 1;
    .header{
      height: 48px;
      margin-bottom: 5px;
      box-shadow: 0 0 12px #ccc;
    }
    .el-tabs {
      height: calc(100% - 53px);
      .el-tabs__content {
        height: calc(100% - 56px);
        .el-tab-pane {
          height: 100%;
        }
      }
      .el-icon-refresh {
        margin-left: 6px;
        font-size: 12px;
      }
      .el-icon-refresh:hover {
        background-color: #c0c4cc;
        color: #ffffff;
        border-radius: 50%;
        transition: all 0.3s;
      }
    }
  }
}
</style>
