<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px; margin-top:200px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    onSubmit(values) {
      console.log("submit", values);
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
.login {
  overflow: hidden;
  min-height: 650px;
}
.van-from {
  top: 150px;
}
.van-cell {
  top: 180px;
  width: 240px;
  margin: 0 auto;
  margin-top: 10px;
  background: rgb(205, 230, 238);
  border-radius: 6px;
}
.van-button {
  width: 200px;
  margin: 0 auto;
}
</style>
