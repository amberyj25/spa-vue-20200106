<template>
<div>
<ul v-for="item in lists">
    <h2>{{item.name}}</h2>
    <li>{{item.name}}</li>
    <img :src="item.img">
</ul>
</div>
</template>

<script>
import lesson1 from "./img/lesson1.png"
import lesson2 from "./img/lesson2.png"
import lesson3 from "./img/lesson3.png"
export default{
    data(){
        return{
            lists:[  
        {
            name:"Basic Course",
            img:lesson1
        },{
            name:"good Course",
            img:lesson2
        },{
            name:"So Fun Course",
            img:lesson3
        }
            ]
        }
    },
    }
</script>
<style>
img{
    width:300px;
    height:300px;
}
</style>