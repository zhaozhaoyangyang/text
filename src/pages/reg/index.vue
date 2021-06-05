<template>
  <div class="reg">
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#fa1951"
          style="margin-top:200px; width:40%;margin-left:90px"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { reqReg } from "../../api/reg";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async onSubmit(values) {
      console.log("submit", values);
      const result = await reqReg({ ...values, avater: this.imgurl });
      console.log(result);
      if (result.status === 200) {
        Toast("注册成功");
        this.$router.push("/login");
      }
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.reg {
  width: 100%;
  height: 667px;
  background: url(../../assets/山.jpg) no-repeat;
  z-index: 1;
  position: relative;
}
.van-cell {
  top: 160px;
  z-index: 0;
  width: 80%;
  left: 35px;
  border-radius: 20px;
  margin-bottom: 20px;
  align-content: center;
  justify-content: center;
}
</style>
