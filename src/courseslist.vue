<template>
<div>
    <h2>courses</h2>
    <ul v-for="course in courses">
        <div class="lig">
            <img :src="course.imgr">
            <div class="s">
                <li :course.name="course">
                <router-link :to="{name:'coursedetailid',params:{id:course.id}}">{{course.name}}</router-link>
                </li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime libero reiciendis voluptatum velit quod officiis minima in vitae nemo praesentium ullam ut numquam possimus, aliquam ad hic consectetur deserunt? Deleniti?</p>
            </div>
        </div>
        <div class="clearfix"></div>
    </ul>
</div>
</template>
<script>
import l1 from "./img/lesson1.png";
import l2 from "./img/lesson2.png";
import l3 from "./img/lesson3.png";
export default {
    data(){
        return {
            courses:[
                {
                    id:1,
                    name:"basic course",
                    imgr:l1
                },{
                    id:2,
                    name:"good course",
                    imgr:l2
                },{
                    id:3,
                    name:"high course",
                    imgr:l3
                }
            ]
        }
    }

}
</script>

<style scoped>
.lig{
    width:1000px;
    height:400px;
}
img{
    width: 500px;
    height: 450px;
    float:left;
    margin-bottom:20px;
    margin-right: 25px; 
}
s{
    width:380px;
    height:450px;
    float: left;
}
.clearfix{
    clear:both
}
ul{
    list-style-type: none;
}
li{
    font-size:50px;
}
</style>
