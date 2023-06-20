<template>
    <div>
      <div style="font-size:16px;">
        
        <p >某实时的C/S系统，服务器端应用程序需要接受客户端发送的不同类型的数据包，为了使系统设计达到最优，使用统一接口，接口（通用包）的格式为：</p>
        <img src="./seven.png"/>
         <p> 包中各段的解释如下:</p>
  <p>A：用来确定不同的包类型共有4个bit位，该系统有10种包类型，分别用0000、0001、0010、0011、0100、0101、0110、0111、1000、1001来表示；</p>
  <p>B：表示本发送包的内容字节数，共64个bit位；</p>
  <p>C：表示业务种类，表示“现金查询”，“支票查询”，“存款”，“取款”；</p>
  <p>D：是在100到999之间的数值；</p>
  <p>E：是在200和500之间或在600到900之间的数值；；</p>
  <p>F：输入条件是六位字符串；</p>
  <p>G：为保留的256个bits。</p>
  <p>用等价类测试的思想，如何划分等价类？并指出强一般等价类用例的个数。</p>
        <br>
        <br>
</div>

<img src="./answer.png"/>




    </div>



</template>

<script>

export default {
  name: "CSquestion",
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