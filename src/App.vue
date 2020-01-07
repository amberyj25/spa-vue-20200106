<template>
<div class="wrap">
  <topbar></topbar>
  <div class="clearfix"></div>
  <div class="img"></div>
  <router-view></router-view>
  <footer-bar></footer-bar>
</div>
</template>
<script>
import topbar from "./topbar.vue"
import footerBar from "./footerBar.vue"
export default{
  components:{topbar,footerBar}
}
</script>
<style>
.wrap{
  width: 1000px;
  margin: auto;
}
.img{
  width:1000px;
  height: 450px;
  background: url(./img/kv.png) no-repeat;
  background-size:contain;
}
.clearfix{
  clear : both;
}
h2{
  font-size: 55px;
}
</style>
