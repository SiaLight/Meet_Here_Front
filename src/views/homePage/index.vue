<template>
    <div class="home">
        <div style="margin-top: 15px;" class="searchDiv">
            <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="bookBox">
        <div class="book1">
            <p class="shangjia">预定商家</p>
            <el-radio-group v-model="radio1">
                <el-radio-button label="场馆1" class="radioD"></el-radio-button>
                <el-radio-button label="场馆3" class="radioD"></el-radio-button>
                <el-radio-button label="场馆4" class="radioD"></el-radio-button>
                <el-radio-button label="场馆5" class="radioD"></el-radio-button>
            </el-radio-group>
        </div>
    </div>
        <div class="stadiumDiv">
            <stadium></stadium>
        </div>
    </div>
</template>
<script>
    import stadium from '../../components/stadium'
    export default {
 data(){
     return{
         search:'',
         radio1: ''
     }
 },
 components:{stadium}

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
 .book1{
     display: flex;
     flex-direction:row;
     float: left;
 }
    .bookBox{
        margin-top:10px;
    }
    .shangjia{
        margin-right: 5px;
        font-size: 14px;
        color: #333333;
    }
    .radioD{
        margin-left: 5px;
    }
    .stadiumDiv{
        margin-top:10px;
    }

        </style>