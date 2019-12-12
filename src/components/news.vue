<template>
    <div>
        <el-card class="card">
            <h4>{{news.title}}</h4>
            <p>{{news.content}}</p>
            <P class="author">from:{{news.author}}</P>
        </el-card>
    </div>
</template>
<script>
    export default {
        props:{
         news:{
             type: Object,
         }
        }
    }
</script>
<style scoped>
.card{
    display: flex;
   float: left;
}
    .author{
        color: #909399;
    }

</style>