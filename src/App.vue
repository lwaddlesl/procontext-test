<template>
  <div id="app">
    <leftMenu />
    <right />
  </div>
</template>

<script>
import leftMenu from "./components/leftMenu.vue";
import right from "./components/right.vue";

export default {
  name: "App",
  components: {
    right,
    leftMenu,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
}
</style>
