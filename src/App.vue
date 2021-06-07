<template>
  <div id="app">
    <Head v-if="$route.meta.headerShow"></Head>
    <router-view></router-view>
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
};
</script>

<style></style>
