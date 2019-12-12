<template>
    <div id="index">
        <el-container id="container">
            <el-header id="header">
                MeetHere
            </el-header>
            <el-container>
                <el-aside id="aside">
                    <el-row :gutter="12" class="user">
                        <el-col :span="4"  :offset="2"> <el-avatar icon="el-icon-user-solid"></el-avatar></el-col>
                        <el-col :span="6"><P>张同学</P></el-col>
                    </el-row>
                    <el-divider class="divider"></el-divider>
                    <el-menu  @select="handleSelect">
                        <el-menu-item index="1"><i class="el-icon-s-home"></i>场馆预约</el-menu-item>
                        <el-menu-item index="2"><i class="el-icon-s-order"></i>订单管理</el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-s-grid"></i>查看新闻</el-menu-item>
                        <el-menu-item index="4"><i class="el-icon-s-finance"></i>我的信息</el-menu-item>
                    </el-menu>
                    <div class="logout">
                        <el-button type="primary" plain >注销</el-button>
                    </div>

                </el-aside>
                <el-main id="main">
                    <home v-if="path==='1'">
                    </home>
                    <appointment v-if="path==='2'"></appointment>
                    <see-news v-if="path==='3'"></see-news>
                    <info v-if="path==='4'"></info>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import home from '../homePage'
    import appointment from '../appointment'
    import  info from '../info'
    import seeNews from '../seeNews'
    export default {
        name: 'app',
        data: () =>({
            path: 0
        }),
        components: {
            home,
            appointment,
            info,
            seeNews
        },
        methods:{
            handleSelect(path){

                this.path = path;
                // eslint-disable-next-line no-console
                console.log(path);
            }
        }

    }
</script>

<style>
    #index {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
        width:100%;
        height:100vh;
    }
    #container{
        width:100%;
        height:100%;
    }

    #header{
        background-color: #B3C0D1;
        color: #333;
        font-size: 20px;
        font-weight: bolder;
        text-align: center;
        line-height: 60px;
        width:100%;
    }
    #aside {
        width:15%;
        color: #333;
        text-align: left;
    }

    #main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        width:85%;
    }

    .user{
        margin-top:10px;
    }
    .divider{
        margin:0;
    }
    .logout{
       margin-top:300px;
        margin-left: 15px;
    }
</style>
