<template>
<div>
    <h2>courses</h2>
    <ul v-for="course in courses">
        <div class="lig">
            <img :src="`./img/${course.img}`"/>
            <div class="s">
                <li>{{course.name}}</li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime libero reiciendis voluptatum velit quod officiis minima in vitae nemo praesentium ullam ut numquam possimus, aliquam ad hic consectetur deserunt? Deleniti?</p>
            </div>
        </div>
    </ul>
    <div class="clearfix"></div>
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
                    name:"b",
                    imgr:l1
                },{
                    name:"g",
                    imgr:l2
                },{
                    name:"h",
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
    width: 580px;
    height: 450px;
    float:left;
    margin-bottom:20px;
    margin-right: 20px; 

}
s{
    width:350px;
    height:380px;
}
.clearfix{
    clear:both
}
</style>
