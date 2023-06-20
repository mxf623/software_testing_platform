<template>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :default-openeds="openeds"
      router
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>课程练习</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/triangle">判断三角形</el-menu-item>
          <el-menu-item index="/calendar">万年历问题</el-menu-item>
          <el-menu-item index="/sales1">销售管理系统</el-menu-item>
          <el-menu-item index="/sales">电脑销售系统</el-menu-item>
          <el-menu-item index="/cash">电信收费问题</el-menu-item>
          <el-menu-item index="/cs">实时CS系统</el-menu-item>
          <el-menu-item index="/nine">ATM系统</el-menu-item>
          <el-menu-item index="/twelve">构建程序图</el-menu-item>
          <el-menu-item index="/thirteen">销售系统</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
</template>

<script>

export default {
  name: "AsideBar",
  components: {},
  props: ['is-collapse'],
  data() {
    return {
      openeds: ['1'],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
};
</script>

<style scoped lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>