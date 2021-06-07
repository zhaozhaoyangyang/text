<template>
  <div id="app">
    <Head v-if="$route.meta.headerShow"></Head>
    <router-view v-if="isRouterAlive"></router-view>
    <Foot v-if="$route.meta.footerShow"></Foot>
  </div>
</template>

<script>
import Foot from "./components/footer.vue";
import Head from "./components/header.vue";
export default {
  name: "App",
  components: {
    Head,
    Foot,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true, //模块刷新
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style></style>
