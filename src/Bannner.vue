<template>
    <header>
      <h1>{{msg}}</h1>
    </header>
  
</template>
<script>
export default {
  data() {
    return {
      msg: "Todo"
    };
  }
};
</script>
<style scoped>
header {
  
}
h1 {
  margin: 0 auto;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
  font-weight: bolder;
  font-style: italic;
}
</style>
