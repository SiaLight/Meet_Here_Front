<template>
    <div  class="login">
    <div class="LoginBoard">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>MeetHere</span>
            </div>
           <div class="inputDiv">
               <el-input placeholder="请输入名称"  v-model="userID">
                   <template slot="prepend">名称</template>
               </el-input>
               <el-input placeholder="请输入密码"   v-model="password" class="password" show-password>
                   <template slot="prepend">密码</template>
               </el-input>
           </div>
            <div class="buttonDIV">
                <el-button type="primary" plain @click="loginHandle">登录</el-button>
                <el-button type="primary" plain @click="registerHandle">注册</el-button>
            </div>
        </el-card>
    </div>
    </div>
</template>
<script>

    export default {
        data: () => ({
            userID:'',
            password:''
        }),
      methods:{
           loginHandle () {
               this.$store.commit('LOGIN',{userId:this.userId,identity:1});
               if(this.userID === '1')
                   this.$router.push({name:'index'});
               else
                   this.$router.push({name:'AdminIndex'});
          },
          registerHandle(){

          }
      }
    }
</script>
<style scoped>
    .login{
        display: flex;
        justify-content: center;
        align-items: center;
    }
.LoginBoard{
    width:60%;

}
    .buttonDIV{
        margin-top: 10px;
    }
    .password{
        margin-top: 10px
    }
    .inputDiv{

    }
</style>