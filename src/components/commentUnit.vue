<template>
    <div>
       <div v-for="item in comment " :key="item.id" class="commentBox">
           <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
           <p class="name">{{item.user_id}}:</p>
           <div class="box2">
               <span>{{item.createTime}}</span>
               <P>{{item.content}}</P>
           </div>
       </div>
        <div class="inputBox">
            <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 6}"
                    placeholder="请输入评论......"
                    v-model="conmentDetail">
            </el-input>
            <el-button type="danger" class="but">提交评论</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            comment:{
                type: Array
            }
        },
        data(){
            return{
                conmentDetail:''
            }
        }
    }
</script>
<style scoped>

    .commentBox{
        display: flex;
        flex-direction: row;
        margin-left: 100px;
    }
    .box2{
        margin-left: 10px;
        float: left;
    }
    .box2 span{
        font-size: 12px;
        color: #909399;
    }
    .box2 p{
        margin-top: 0px;
        font-size: 14px;
    }
    .name{
        margin-left: 5px;
        font-size: 14px;
    }
    .inputBox{
        width:60%;
        margin-left: 100px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-items: left;
    }
    .but{
        margin-top: 10px;
        width:100px;
    }
</style>