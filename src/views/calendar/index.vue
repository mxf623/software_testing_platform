<template>
  <div style="height: 100%" ref="tabs">
    <el-card  shadow="hover">
      <el-tabs v-model="activeName">
          <SystemTest :parentHeight="parentHeight" />
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import CalendarQuestion from "./question";
import SystemTest from "./systemtest";
import SingleCase from "./singlecase";
import ExcelFile from "./excelfile";
import BugRecord from "./bug";

export default {
  name: "Calendar",
  components: {
    CalendarQuestion,
    SystemTest,
    SingleCase,
    ExcelFile,
    BugRecord
  },
  props: {},
  data() {
    return {
      activeName: "first",
      parentHeight: 3333,
    };
  },
  computed: {},
  watch: {},
  created() {
    window.addEventListener("resize", this.getHeight);
  },
  mounted() {},
  methods: {
    getHeight() {
      try {
        this.parentHeight = this.$refs.tabs.offsetHeight;
      } catch (err) {}
    },
  },
};
</script>

<style scoped lang="less">
</style>