<template>
    <div class="menubar"> 
        <div class="menu about">
        <router-link to="/about">about</router-link>
        </div>
        <div class="menu courses">
        <router-link to="/courses">courses</router-link>
        </div>
        <div class="menu booking">
        <router-link to="/booking">booking</router-link>
        </div>
    </div>
</template>
<style >
.menubar{
  width:360px;
  height:50px;
  float:right;
}
.menu{
  width:120px;
  height:50px;
  float:left;
  text-align:center;
  box-sizing:border-box;
  text-decoration: none;
}
</style>