<template>
    <div class="stadiumD">
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in stadiumData">
                <el-card class="box-card" @click="handleStadium">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="item.url"></el-image>
                    <div>
                        <P CLASS="name">{{item.name}}</P>
                        <P class="address">{{item.address }}</P>
                    </div>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                stadiumData:[
                    {
                        url: '../assets/logo.png',
                        name: '热浪健身馆',
                        address:'中北校区理科大楼'
                    },
                    {
                        url: '../assets/logo.png',
                        name: '华师健身馆',
                        address:'中北校区理科大楼'
                    },
                    {
                        url: '../assets/logo.png',
                        name: '中北健身馆',
                        address:'中北校区理科大楼'
                    }

                ]
            }
        },
        handleStadium(){

        }

    }
</script>
<style scoped>
 .name{
    font-size: 16px;
     font-weight: bolder;
 }
    .address{
        font-size: 14px;
        color: #666666;
    }

</style>