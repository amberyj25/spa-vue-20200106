<template>
<div>
<h2>booking</h2>
<form action="">
<div class="box 1">
    <div class="text">
        <label for="name">name : </label>
    </div>
    <input type="text" id="name">
</div>
<div class="box 2">
    <div class="text">
        <label for="tel">tel : </label>
    </div>
    <input type="text" id="tel">
</div>
<div class="box 3">
    <div class="text">
        <label for="sex">sex : </label>
    </div>
    <div id="sexname">
        <input type="radio" id="sex" name="sex" value="women">women
        <input type="radio" id="sex" name="sex" value="men">men
    </div>
</div>
<div class="box 4">
    <div class="text">
    <label for="likefood">like : </label>
    </div>
    <input type="checkbox" id="likefood" name="likefood" value="fish">fish
    <input type="checkbox" id="likefood" name="likefood" value="meat">meat
</div>
<div class="box 5">
    <div class="text">
        <label for="age">age : </label>
    </div>
    <select id="age">
        <option v-for="item in 35" >{{item}}歲</option>
    </select>
</div>
<div class="box 6">
    <div class="text">
        <label for="course">course :</label>
    </div>
    <select>
        <option v-for="item in courses">{{item}}</option>
    </select>
</div>
</form>
</div>
</template>
    
<script>
export default{
    data(){
        return{
            courses:["Basic Course","good Course","So Fun Course"]
        }
    }
}
</script>
<style>
label,.text1{
    font-size:45px;
}
.text{
    width:200px;
    height:50px;
    text-align: right;
    line-height:50px;
    float:left;
}
#name,#tel,#sexname,#likeid{
    width:650px;
    height:50px;
    float:left;
}
.box{
    width:860px;
    height: 80px;
}
input{
    font-size: 30px;
}
input[type="radio"]{
    width: 30px;
    height:30px; 
    margin-right: 20px;   
}
input[type="checkbox"]{
    width: 30px;
    height:30px; 
    margin-right: 20px;
}
select{
    width: 300px;
    height: 50px;
}
option{
    text-align: center;
}
</style>