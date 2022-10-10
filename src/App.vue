<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    document.body.style.background = "url('./static/image/1-1.jpg') no-repeat"
    document.body.style.backgroundSize = "100% 100%"
  },
};
</script>

<style lang="less">
</style>
