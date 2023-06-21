<template>
<div style="height:100%" ref="tabs" >
<el-card id="main-card" shadow="hover">
      <el-tabs v-model="activeName" >
        <CashQuestion />
        <br><br>
        <SystemTest :parentHeight="parentHeight" />
        <br>
          <p>---------------------------------------------------------------------</p>
          <p>单测试用例：</p>
          <SingleCase />
      </el-tabs>
    </el-card>
</div>

</template>

<script>
import CashQuestion from "./question";
import SystemTest from "./systemtest";
import SingleCase from "./singlecase";
import ExcelFile from "./excelfile";
import BugRecord from "./bug";

export default {
  name: "Cash",
  components: { 
    CashQuestion,
    SystemTest,
    SingleCase,
    ExcelFile,
    BugRecord
  },
  props: {},
  data() {
    return {
      activeName: "first",
      parentHeight:3333
    };
  },
  computed: {},
  watch: {},
  created() {
    window.addEventListener('resize', this.getHeight);
  },
  mounted() {},
  methods: {
    getHeight(){
      try{
         this.parentHeight = this.$refs.tabs.offsetHeight;
      }catch(err){};
    }

  },
};

</script>

<style scoped lang="less">

</style>