<template>
  <div class="mine">
    <div class="top">
      <p>用户名 ></p>
      <van-icon class="saoma" name="scan" color="black" />
    </div>
    <div class="shang">
      <p>开通黑胶VIP</p>
      <p>立享超17项专属特权></p>
      <p>限时特惠!黑胶首月仅0.88元!</p>
    </div>
    <div class="zhong">
      <van-icon name="envelop-o" />
      <p>我的消息</p>
      <p>云贝中心</p>
      <p>创作者中心</p>
    </div>
    <div class="xia">
      <p>音乐服务</p>
      <p>云村有票</p>
      <p>商城</p>
      <p>游戏专区</p>
      <p>口袋彩铃</p>
    </div>
    <div class="qita">
      <p>其他</p>
      <p>设置</p>
      <p>夜间模式</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
van-icon {
  font-size: 15px;
}
.saoma {
  margin-top: 15px;
}
.top {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
}
.shang {
  width: 90%;
  height: 130px;
  background: rgb(143, 148, 150);
  margin: 0 auto;
  border-radius: 20px;
}
.zhong {
  width: 90%;
  height: 130px;
  background: rgb(100, 133, 145);
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
.xia {
  width: 90%;
  height: 130px;
  background: rgb(141, 162, 207);
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 20px;
}
.qita {
  width: 90%;
  height: 130px;
  background: rgb(106, 117, 141);
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 20px;
}
</style>
