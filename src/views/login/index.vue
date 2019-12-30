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
                           <input type="text" v-model="userName"></input>
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
                        <el-button type="primary" plain @click="loginHandle" class="logIN">登录</el-button>
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
            userName:'',
            password:'',
            telephone:'15317872182'
        }),
      methods:{
           loginHandle () {
               // this.$store.commit('LOGIN',{userId:this.userId,identity:1});
               // if(this.userID === '1')
               //     this.$router.push({name:'index'});
               // else
               //     this.$router.push({name:'AdminIndex'});
               utils.request({
                   invoke: utils.api.login,
                   params:{
                           username: this.userName,
                           password: this.password
                   }
               }).then(res =>{
                   console.log(res);
                    if(res.code === 200){
                   let userData = res.data;
                       this.$store.commit('LOGIN',{
                           userId:userData.id,
                           userName:userData.username,
                           identity:userData.admin});
                       if(!userData.admin){
                           this.$router.push({name:'index'});
                       }
                       else
                           this.$router.push({name:'AdminIndex'});
                   }
                   else{
                        this.$message(res.message);
                   }
               });


          },
          registerHandle(){
              utils.request({
                  invoke: utils.api.register,
                  params:{
                      username: this.userName,
                      password: this.password,
                      telephone:this.telephone,
                  }
              }).then(res =>{
                  console.log("进入注册");
                  console.log(res);
                  if(res.code === 102 || res.code === 104 ){
                      this.$message(res.message);
                  }
                  else if(res.code === 200){
                      this.$message.success('注册成功');
                  }
              })
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
    .buttonDIV{
        margin-top: 20px;
    }
    /* .inputDiv{
       z-index: 999;
    } */
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