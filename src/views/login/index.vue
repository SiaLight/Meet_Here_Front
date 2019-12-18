<template>
    <div  class="login">
    <div class="LoginBoard">
           <div class="inputDiv">
               <el-row :gutter="10">
                   <el-col :span="8">
                       <span>名称</span>
                   </el-col>
                   <el-col :span="8">
                       <div class="inputBorder">
                           <input type="text" v-model="userID"></input>
                       </div>
                   </el-col>
               </el-row>
               <el-row :gutter="10" style="margin-top: 10px">
                   <el-col :span="8">
                       <span>密码</span>
                   </el-col>
                   <el-col :span="8">
                       <div class="inputBorder">
                       <input type="password" v-model="password"></input>
                       </div>
                   </el-col>
               </el-row>
           </div>
            <div class="buttonDIV">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-button type="primary" plain @click="loginHandle">登录</el-button>
                    </el-col>
                    <el-col :span="12">
                        <el-button type="primary" plain @click="registerHandle">注册</el-button>
                    </el-col>
                </el-row>
            </div>
    </div>
    </div>
</template>
<script>
 import  utils from '../../utils'
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
               // utils.request({
               //     invoke: utils.api.login,
               //     params:{
               //     }
               // }).then(res =>{
               //     console.log("进入登录验证");
               //     console.log(res.data);
               // })
               //     .catch(res=>{
               //         console.log("error");
               //         console.log(res);
               //     })
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
    width:80%;
}
.box-card{
    opacity:0.2;
}
    .buttonDIV{
        margin-top: 20px;
    }
    .password{
        margin-top: 10px
    }
    .inputDiv{
       z-index: 999;
    }
    .inputDiv input{
        border:0;
        background-color:transparent;
    }

    .inputDiv span{
        color: #000080;
    }
    .inputBorder{
        border-bottom: 2px solid #1E90FF;
        width: 130px
    }

</style>