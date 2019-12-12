<template>
  <div id="app" >
<!--     <login v-if="!logState"></login>-->
<!--          <index v-else-if="userIdentity"></index>-->
<!--          <AdministratorIndex v-else></AdministratorIndex>-->
      <router-link to="/index">登录</router-link>
      <router-view></router-view>

 </div>
</template>

<script>
     import  login from './views/login'
     import index from  './views/index'
     import  AdministratorIndex from './views/Aindex'
     import { mapState } from 'vuex'
export default {
  name: 'app',
    data(){
      return {
          appKey: 1,
      }
    },
    components: {login,index, AdministratorIndex},
    computed: mapState({
        logState: state => state.loginState,
        userIdentity: state => state.identity
    }),

    methods:{

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 100%;
  height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
