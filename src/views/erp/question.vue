<template>
    <div>
      <div style="font-size:16px;">
        
      <p >下图是ERP系统的流图，根据系统需求和流程图，归纳出比较清晰的主、备选流关系图，并基于主、备选流设计场景和相应的测试用例。MPS（ Master Production Schedule），MRP(Manufacturing Resource Planning)</p>
        <img src="./q.png" alt="">
        <br>
        <p>答案：</p>
        <br>
        <p>基本流：
            1.销售合同
            2.计划需求
            3.MPS计算
            4.可用库存满足销售需求
            5.销售发货管理
            6. 货发完
            7. 合同结案</p>
            <p>备选流：</p>
            <img src="./1.png" alt="">
            <p>场景设计：</p>
            <img src="./2.png" alt="">
            <p>用例设计：</p>
            <img src="./3.png" alt="">
            <img src="./4.png" alt="">

</div>





    </div>



</template>

<script>

export default {
  name: "SalesQuestion",
  components: {},
  props: {},
  data() {
    return { }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {

  },
};
</script>

<style scoped lang="less">


</style>