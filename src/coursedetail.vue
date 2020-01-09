<template>
<h2>{{$route.params.id}}</h2>
<p >{{course.name}}</p>
</template>

<script>
export default {
    props:["course"]
}
</script>