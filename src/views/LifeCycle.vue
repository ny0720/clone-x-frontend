<template>
  <div>LifeCycle</div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      message: "Hello Vue.js"
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("update");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("destroyed");
  },
};
</script>

<style>

</style>