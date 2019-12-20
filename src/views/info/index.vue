<template>
    <div class="infoDiv">
        <P class="title">个人信息管理</P>
    <div class="info">
        <el-form ref="form" :model="userInfo" label-width="80px">
            <el-form-item label="昵称">
                <div class="box1">
                <el-input v-model="userInfo.name" style="width: 300px"></el-input>
                <el-button type="primary" @click="changeName" style="margin-left: 10px">确认修改</el-button>
                <el-button @click="cancelName">取消</el-button>
                </div>
            </el-form-item>
            <el-form-item label="新密码">
                <div class="box1">
                <el-input v-model="userInfo.password" show-password style="width: 300px"></el-input>
                <el-button type="primary" @click="changePassword" style="margin-left: 10px">确认修改</el-button>
                <el-button @click="cancelPassword">取消</el-button>
                </div>
            </el-form-item>
            <el-form-item label="确认密码">
                <div class="box1">
                <el-input v-model="confirmPassword" show-password style="width: 270px"></el-input>
                </div>
            </el-form-item>
            <el-form-item label="联系方式">
                <div class="box1">
                <el-input v-model="userInfo.phone" style="width: 300px"></el-input>
                <el-button type="primary" @click="changePhone" style="margin-left: 10px">确认修改</el-button>
                <el-button @click="cancelPhone">取消</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
    </div>
</template>
<script>
    import  utils from '../../utils'
    export default {
    data(){
        return{
            userInfo:{
                userId:'',
                name:'',
                phone: '',
                password:'',
            },
            id:'',
            confirmPassword:''

        }
    },
        methods:{
            init(){
                this.id = this.$store.state.userId;
            },
            changeName(){
                utils.request({
                    invoke: utils.api.updateUsername,
                    params:{
                        newName: this.userInfo.name
                    }
                }).then(res =>{
                    if(res.code === 200)
                        alert("修改名字成功");
                })
            },
            cancelName(){

            },
            changePassword(){
                utils.request({
                    invoke: utils.api.updatePassword,
                    params:{
                        oldPassword: this.userInfo.password,
                        newPassword:  this.confirmPassword
                    }
                }).then(res =>{
                    console.log(res);
                })
            },
            cancelPassword(){

            },
            changePhone(){
                utils.request({
                    invoke: utils.api.updateTelephone,
                    params:{
                        telephone: this.userInfo.phone,
                    }
                }).then(res =>{
                    console.log(res);
                })
            },
            cancelPhone(){

            }
        },
        mounted() {
         this.init();
        }
    }
</script>
<style scoped>
.info{
    width:60%;
    margin-top: 30px;
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
    .box1{
        display: flex;
        flex-direction: row;
    }

</style>