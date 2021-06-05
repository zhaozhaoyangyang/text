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
        v-model="captcha"
        type="captcha"
        name="captcha"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '验证码' }]"
      />
      <van-field
        v-model="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <van-field
        v-model="nickname"
        type="text"
        name="nickname"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <div style="margin: 16px;">
        <p @click="btncaptcha()">获取验证码</p>
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#fa1951"
          style="margin-top:10px; width:40%;margin-left:103px"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { reqReg, reqCaptcha } from "../../api/reg";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      phone: "",
      captcha: "",
      password: "",
      nickname: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    //点击获取验证码
    async btncaptcha() {
      const result = await reqCaptcha({ phone: this.phone });
      console.log(result);
    },
    async onSubmit(values) {
      console.log("submit", values);
      const result = await reqReg({ ...values });
      //   const result =await reqHasPhone({ ...values});
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
  background: url(../../assets/1.jpg) no-repeat;
  z-index: 1;
  opacity: .9;
  position: relative;
}
.van-cell {
  top: 150px;
  z-index: 0;
  width: 80%;
  left: 35px;
  border-radius: 20px;
  margin-bottom: 2px;
  align-content: center;
  justify-content: center;
  /* background-color: #222; */
}

.reg p {
  /* width: 40px; */
  /*  height: 40px;
  line-height: 40px; */
  color: #fff;
  text-align: center;
  /* background: cornflowerblue; */
  margin-top: 170px;
}
</style>
