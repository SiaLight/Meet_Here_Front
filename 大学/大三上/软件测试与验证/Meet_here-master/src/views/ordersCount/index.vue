<template>
    <div class="order">

        <div class="searchWord">
            <el-input
                    v-model="search"
                    style="display: inline-block;width:100%"
                    placeholder="请键入关键字搜索相关订单">
            </el-input>
        </div>

        <!--遍历表格-->
        <div style="margin-top: 20px" class="orderData">
        <el-table
                ref="orderTable"
                :data="tables"
                stripe
                tooltip-effect="dark"
                style="width: 100%">
            <el-table-column
                    type="index"
                    label="序号"
                    width="40">
            </el-table-column>
            <el-table-column
                    prop="user"
                    label="用户"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="stadium"
                    label="场馆"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="时间"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="审核状态">
            </el-table-column>
        </el-table>
        </div>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                order: [{
                    user: '张同学',
                    stadium: '中北体育馆',
                    time: '2019.12.12 9:00-12:00',
                    state:"通过"
                }, {
                    user: '王老师',
                    stadium: '中北羽毛球馆',
                    time: '2019.12.12 9:00-12:00',
                    state: "通过"
                }],
                search:''
            }
        },

        computed:{
            tables(){
                const search=this.search
                if(search){
                    return this.order.filter(data=>{
                        return Object.keys(data).some(key=>{
                            return String(data[key]).toLowerCase().indexOf(search)>-1
                        })
                    })
                }
                return this.order
            }
        },

        methods:{
        }
    }
</script>
<style scoped>

    .sear{
        float: left;
        margin-bottom: 20px;
    }

</style>