<template>
  <div class="">
    <div class="headd">
      <van-icon name="label-o" class="headicl" size="30px"/>
      <van-search shape="round" class="search" v-model="value" placeholder="请输入搜索关键词" use-right-icon-slot background="#fff"/>
      <van-icon name="bullhorn-o" class="headicr" size="30px"/>
    </div>
  </div>
</template>

<script>
export default {

  components: {},
  data() {
    return {
      value: "",
    };
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
* {
  padding: 0;
  margin: 0;
}
.headd {
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  position:fixed ;
}
.search{
    width: 70%;
}
.headicl{
    margin-top: 10px;
    margin-right: 20px;
}
.headicr{
    margin-top: 10px;
    margin-left: 10px;
}
</style>