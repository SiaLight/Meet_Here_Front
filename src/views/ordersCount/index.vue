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
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="user"
                    label="用户"
                    width="160">
            </el-table-column>
            <el-table-column
                    prop="stadium"
                    label="场馆"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="site"
                    label="场地"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="时间"
                    width="220">
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="审核状态">
            </el-table-column>
        </el-table>
        </div>
        <div class="block" style="height:70px;">
            <el-pagination
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pageSize">
            </el-pagination>
        </div>
    </div>
</template>
<script type="es6">
    export default {

        data() {
            return {
                order: [{
                    user: '张同学',
                    stadium: '中北体育馆',
                    site:'场地1',
                    time: '2019.12.12 9:00-12:00',
                    state:"通过"
                }, {
                    user: '王老师',
                    stadium: '中北羽毛球馆',
                    site:'场地3',
                    time: '2019.12.12 9:00-12:00',
                    state: "通过"
                },{
                    user: '张同学',
                    stadium: '中北体育馆',
                    site:'场地1',
                    time: '2019.12.12 9:00-12:00',
                    state:"通过"
                }, {
                    user: '王老师',
                    stadium: '中北羽毛球馆',
                    site:'场地3',
                    time: '2019.12.12 9:00-12:00',
                    state: "通过"
                },{
                    user: '张同学',
                    stadium: '中北体育馆',
                    site:'场地1',
                    time: '2019.12.12 9:00-12:00',
                    state:"通过"
                }, {
                    user: '王老师',
                    stadium: '中北羽毛球馆',
                    site:'场地3',
                    time: '2019.12.12 9:00-12:00',
                    state: "通过"
                },{
                    user: '张同学',
                    stadium: '中北体育馆',
                    site:'场地1',
                    time: '2019.12.12 9:00-12:00',
                    state:"通过"
                }, {
                    user: '王老师',
                    stadium: '中北羽毛球馆',
                    site:'场地3',
                    time: '2019.12.12 9:00-12:00',
                    state: "通过"
                },{
                    user: '张同学',
                    stadium: '中北体育馆',
                    site:'场地1',
                    time: '2019.12.12 9:00-12:00',
                    state:"通过"
                }, {
                    user: '王老师',
                    stadium: '中北羽毛球馆',
                    site:'场地3',
                    time: '2019.12.12 9:00-12:00',
                    state: "通过"
                },{
                    user: '张同学',
                    stadium: '中北体育馆',
                    site:'场地1',
                    time: '2019.12.12 9:00-12:00',
                    state:"通过"
                }, {
                    user: '王老师',
                    stadium: '中北羽毛球馆',
                    site:'场地3',
                    time: '2019.12.12 9:00-12:00',
                    state: "通过"
                },{
                    user: '张同学',
                    stadium: '中北体育馆',
                    site:'场地1',
                    time: '2019.12.12 9:00-12:00',
                    state:"通过"
                }, {
                    user: '王老师',
                    stadium: '中北羽毛球馆',
                    site:'场地3',
                    time: '2019.12.12 9:00-12:00',
                    state: "通过"
                },{
                    user: '张同学',
                    stadium: '中北体育馆',
                    site:'场地1',
                    time: '2019.12.12 9:00-12:00',
                    state:"通过"
                }, {
                    user: '王老师',
                    stadium: '中北羽毛球馆',
                    site:'场地3',
                    time: '2019.12.12 9:00-12:00',
                    state: "通过"
                }],
                //分页
                    pageSize: 10, //每页条数,  默认10条
                    currentPage:1,
                    tempList:[],

                search:''
            }
        },
        mounted(){
            this.init() //页面内初始加载就调用这个函数
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
            init(){
                    utils.request({
                        invoke: utils.api.getOrder,
                        params:{
                            pageSize:10,
                            pageNum:1
                        }
                    }).then(res =>{
                        console.log("第一次获取");
                        console.log(res);
                        this.order = res.data;
                        this.totalRecords = res.total;
                        this.initPage(this.currentPage);
                    })
            },
            handleCurrentChange(list,currentPage) {
                let from=(currentPage-1)*this.pageSize;
                let to=currentPage*this.pageSize;
                this.tempList=[];
                for(;from<to;from++){
                    if(list[from]){
                        this.tempList.push(list[from]);
                    }
                }
            },
        }
    }
</script>
<style scoped>
    .sear{
        float: left;
        margin-bottom: 20px;
    }

</style>