<template>
    <div>
        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>
        <div class="detail">
           <el-row :gutter="30">
               <el-col :span="4" >
                   <el-image :src="stadium.image" fit="fill"></el-image>
               </el-col>
               <el-col :span="14" class="detailSite" >
                   <div class="detailSite">
                       <h1 class="title">{{stadium.name}}</h1>
                       <p class="color:#606266">{{stadium.des}}</p>
                       <p>租金：<span style="color: red;font-weight: bolder">{{stadium.rent}}</span>元/小时</p>
                       <P class="address"><i class="el-icon-location-outline"></i>{{stadium.address}}</P>
                   </div>
               </el-col>
           </el-row>
        </div>
        <div style="margin-top: 20px;">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-select v-model="selectSite" placeholder="请选择场地" @change="siteChange">
                        <el-option
                                v-for="item in site"
                                :key="item.id"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                    <el-date-picker
                            v-model="dateTime"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                            style="margin-top: 5px" @change="dateChange">
                    </el-date-picker>
                    <el-time-select
                            placeholder="起始时间"
                            style="margin-top: 5px"
                            v-model="time.startTime"
                           format="timestamp"
                            @change="startChange"
                            :picker-options="{start: '08:30',step: '00:30',end: '18:30' }">
                    </el-time-select>
                    <el-time-select
                            placeholder="结束时间"
                            style="margin-top: 5px"
                            v-model="time.endTime"
                            @change="endChange"
                            :picker-options="{start: '08:30',step: '00:30',end: '18:30',minTime: time.startTime}">
                    </el-time-select>
                </el-col>
                <el-col :span="6">
                   <el-card body-style="padding: 10px" class="card">
                       <h1>订单信息</h1>
                       <el-divider class="divider"></el-divider>
                       <P><span>场馆：</span>{{order.stadiumName}}</P>
                       <P><span>场地：</span>{{order.siteName}}</P>
                       <P><span>开始时间：</span>{{order.startTime}}</P>
                       <P><span>结束时间：</span>{{order.endTime}}</P>
                       <P><span>租金：</span>{{order.rent}}</P>
                       <el-divider class="divider"></el-divider>
                       <el-button type="danger" @click="book">预定</el-button>
                   </el-card>
                </el-col>
            </el-row>
        </div>
       <div>
           <comment-unit :comment="comment"></comment-unit>
       </div>
    </div>
</template>
<script>
    import  commentUnit from './commentUnit'
    export default {
        data(){
            return {
            stadium:{
                id: 1,
                image: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                name: '热浪健身馆',
                address:'中北校区理科大楼',
                des:'djf dlfvjoesirjvmxk',
                rent:'88'
            },
                site:[
                    {
                        id: 1,
                        name: '羽毛球场地'
                    },
                    {
                        id: 2,
                        name: '乒乓球场地'
                    },
                    {
                        id: 3,
                        name: '篮球场地'
                    }
                ],
                dateTime:'',
                time:{
                   startTime:'',
                    endTime:''
                },
                selectSite: '',
                order:{
                    siteName: '',
                    siteId: '',
                    stadiumName:'',
                    stadiumId:'',
                    rent:'',
                    startTime:'',
                    endTime:''
                },
                comment:[{
                 id:'1',
                    user_id:'张同学',
                    site_id:'4',
                    content:'这个场馆真好',
                    status:false,
                    createTime:'2019-12-10'
                },
                    {
                        id:'2',
                        user_id:'李同学',
                        site_id:'4',
                        content:'这个场馆真好',
                        status:false,
                        createTime:'2019-12-10'
                    },
                    {
                        id:'3',
                        user_id:'陈同学',
                        site_id:'4',
                        content:'这个场馆不太好',
                        status:true,
                        createTime:'2019-12-10'
                    }
                ]
            }
        },
        components:{commentUnit},
     methods:{
         goBack(){
             this.$router.go(-1);
         },
         book(){
             this.$confirm('请确定是否预约?', '提示', {
                 confirmButtonText: '确定',
                 cancelButtonText: '取消',
                 type: 'warning'
             }).then(() => {
                 this.$message({
                     type: 'success',
                     message: '预约成功!'
                 });
             }).catch(() => {
                 this.$message({
                     type: 'info',
                     message: '取消预约'
                 });
             });
         },
         siteChange(name){
             console.log(name);
             this.order.siteName = name;
             this.order.stadiumName = this.stadium.name;
             this.order.stadiumId= this.stadium.id;
             let obj={};
             obj = this.site.find((item)=>{
                 return item.name === name;
             });
             this.order.siteId = obj.id;
         },
         dateChange(e){
             console.log(e);
         },
         startChange(e){
             console.log(e);
             this.order.startTime = this.dateTime +' '+ e;
         },
         endChange(e){
             console.log(e);
             this.order.endTime = this.dateTime +' '+ e;
             let t1= this.time.startTime.split(":");
             let t2= this.time.endTime.split(":");
            let hour1 = parseInt(t1[0]);
             let hour2 = parseInt(t2[0]);
             let min1 = parseInt(t1[1]);
             let min2 = parseInt(t2[1]);
              let diff = hour2-hour1 +(min2-min1)/60;
              this.order.rent = diff*this.stadium.rent;
             console.log(diff);


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
    .card span{
        color: #606266;
    }

</style>