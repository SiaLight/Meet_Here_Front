<template>
    <div class="infoDiv">
        <P class="title">个人信息管理</P>
    <div class="info">
        <el-form ref="form" :model="userInfo" label-width="80px">
            <el-form-item label="昵称">
                <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userInfo.password"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="userInfo.phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认修改</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
    </div>
</template>
<script>
    export default {
    data(){
        return{
            userInfo:{
                name:'张同学',
                phone: '154312.',
                password:''

            }
        }
    },
        methods:{
            onSubmit(){

            }
        }


    }
</script>
<style scoped>
.info{
    width:60%;
}
    .infoDiv{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .title{
        font-size: 16px;
        font-weight: bolder;
    }

</style>