<template>
    <div>
        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>
        <div class="detail">
           <el-row :gutter="30">
               <el-col :span="4" >
                   <el-image :src="site.image" fit="fill"></el-image>
               </el-col>
               <el-col :span="14" class="detailSite" >
                   <div class="detailSite">
                       <h1 class="title">{{site.name}}</h1>
                       <p class="color:#606266">{{site.des}}</p>
                       <p>租金：<span style="color: red;font-weight: bolder">{{site.rent}}</span>元/小时</p>
                       <P class="address"><i class="el-icon-location-outline"></i>{{site.address}}</P>
                   </div>
               </el-col>
           </el-row>
            <el-row :gutter="20" justify="start">
                <el-col :span="10">
                    <div class="block">
                        <el-date-picker
                                v-model="time"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>

        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return {
            site:{
                id: 1,
                image: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                name: '热浪健身馆',
                address:'中北校区理科大楼',
                des:'djf dlfvjoesirjvmxk',
                rent:'88'
            },
                time:''
            }
        },
     methods:{
         goBack(){
             this.$router.go(-1);
         }
     }
    }
</script>
<style scoped>
 .detail{
     margin-top: 20px;
 }
    .detailSite{
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content:flex-start;*/
        float: left;

    }
    .title{
        margin-top:0;
        margin-right: 0;
    }
    .address{
        color: #666666;
        font-size: 14px;
    }

</style>