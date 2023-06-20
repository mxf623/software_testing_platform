<template>
    <div>
      <div style="font-size:16px;">
        
      <p >构建ATM系统的state transition diagram, 利用state transition testing方法将其转换成transition tree，而后基于transition tree的路径设计测试用例，要考虑robustness。</p>

      <p style="margin-top:100px;font-size:20px;">ATM的状态包括：</p>
      <img style="width:60%;height:60%;" src="./state.png"/>
      <p style="margin-top:100px;font-size:20px;">ATM的行为包括：</p>
      <img style="width:60%;height:60%;" src="./action.png"/>
  <p style="margin-top:100px;font-size:20px;">状态图：</p>
  <img style="width:60%;height:60%;" src="./statepic.png"/>
  <br>
  <p>根据状态图转状态树的算法</p>
  <p>（1）状态树的节点描述状态图的状态，状态树的枝干描述状态图的事件。</p>
    <p>（2）转换树的根节点为状态图的初始状态，转换树的终节点为叶节点。</p>
    <p> （3）转换树的每个节点，在状态图中如有直接后续状态，则添加一个枝干和节点（不同的事件应有不同的枝干和节点），直到出现从根节点到新添加的节点的路径上已经出现过相同状态的情况，可将此节点作为叶节点：
      状态树如下（其中，有些重复部分省略）</p>
   <p style="font-size:20px;">Transition Tree：</p>
   <img style="width:60%;height:60%;" src="./tree.png"/>
   <p style="margin-top:100px;font-size:20px;">用例设计 ：</p>
        <img style="width:60%;height:60%;" src="./ts.png"/>
</div>




    </div>



</template>

<script>

export default {
  name: "SalesQuestion",
  components: {},
  props: {},
  data() {
    return {}
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