<template>
    <div class="home">
        <div style="margin-top: 15px;" class="searchDiv">
            <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="handleChange"></el-button>
            </el-input>
        </div>
        <div class="bookBox">
    </div>
        <div class="stadiumDiv" >
            <el-row :gutter="20" >
                <el-col :span="6" v-for="item in selectStadium" style="margin-top:10px" :key="item.id">
                    <stadium :item = "item"></stadium>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import stadium from '../../components/stadium'
    export default {
 data(){
     return{
         search:'',
         radio1: '',
         stadiumData:[
             {
                 id: 1,
                 url: '../../assets/logo.png',
                 name: '热浪健身馆',
                 address:'中北校区理科大楼'
             },
             {
                 id: 2,
                 url: '../assets/logo.png',
                 name: '华师健身馆',
                 address:'中北校区理科大楼'
             },
             {
                 id: 3,
                 url: '../assets/logo.png',
                 name: '中北健身馆',
                 address:'中北校区理科大楼'
             },
             {
                 id: 4,
                 url: '../assets/logo.png',
                 name: '中北健身馆',
                 address:'中北校区理科大楼'
             },
             {
                 id: 5,
                 url: '../assets/logo.png',
                 name: '中北健身馆',
                 address:'中北校区理科大楼'
             }
         ]
     }
 },
         components:{stadium},
        methods:{
            handleChange(){

            }
        },
        computed:{
            selectStadium: function(){
                if(!this.search){
                    return this.stadiumData;
                }
                let searchString = this.search.trim();
                let searchArray=[];
                searchArray = this.stadiumData.filter(function(item){
                    if(item.name.indexOf(searchString)!== -1){
                        return item;
                    }
                })
                return searchArray;
            }
        }

    }
</script>
<style scoped>
.searchDiv{
    float: left;
    width:50%;
}
    .home{
        display: flex;
        flex-direction: column;
    }
    .bookBox{
        margin-top:10px;
    }
    .stadiumDiv{
        margin-top:10px;
        width: 100%;

    }

 </style>