<template>
    <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">未审核留言</el-menu-item>
        <el-menu-item index="2">已发布留言</el-menu-item>
        <el-menu-item index="3">忽略留言</el-menu-item>
    </el-menu>

    <el-table
            :data="newsData"
            stripe
            style="width: 100%"
            v-loading = "pictLoading"
            element-loading-background = "rgba(0, 0, 0, 0.5)"
            element-loading-text = "数据正在加载中"
            element-loading-spinner = "el-icon-loading">
        <el-table-column
                prop="name"
                label="姓名"
                width="100">
        </el-table-column>
        <el-table-column
                prop="des"
                label="内容"
                width="220">
        </el-table-column>
        <el-table-column
                prop="stadium"
                label="场馆"
                width="120">
        </el-table-column>
        <el-table-column
                prop="site"
                label="场地"
                width="120">
        </el-table-column>
        <el-table-column
                prop="time"
                label="留言时间"
                width="180">
        </el-table-column>
        <el-table-column label="审核状态">
            <template slot-scope="scope">
                <span v-if="scope.row.status==1">已发布</span>
                <span v-else-if="scope.row.status==2">已忽略</span>
                <span v-else>
                    <el-button
                            @click="handleCheck(scope.row)"
                            size="small"
                            type="primary"
                            icon="edit">
                        <span >发布</span>
                    </el-button>
                    <el-button
                            @click="handleUnCheck(scope.row)"
                            size="small"
                            type="danger"
                            icon="delete">
                        <span>忽略</span>
                    </el-button>
                </span>
            </template>
        </el-table-column>
    </el-table>
        <div>
            <el-pagination
                    background
                    class="page"
                    layout="total,prev, pager, next"
                    :current-page.sync="currentPage"
                    @current-change="handleCurrentChange"
                    :page-size="pageSize"
                    :total="totalNum">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //分页参数
                activeIndex:'1',
                totalNum: 0,
                pageSize: 8,
                currentPage:1,
                pictLoading:true,

                //new分类数组
                newsData: [],
                unCheckedNewsData:[],
                publishedNewsData:[],
                ignoredNewsData:[],

                //index选择参数
                activeIndex:'1',
                selectTab:''
            }
        },
        mounted(){
            //初始化所有数据
            this.loadData(0)
            this.loadData(1)
            this.loadData(2)
        },
        methods:{
            loadData(state){
                this.pictLoading=true;
                utils.request({
                    invoke: utils.api.auditComment,
                    params:{
                        status: state,
                        pageNum: this.currentPage,
                        pageSize: this.pageSize
                    }
                }).then(res=>{
                    console.log(res);
                    this.totalNum=res.total;
                    if(state===0){
                        this.unCheckedNewsData=res.data;
                        for(let i=0;i<this.unCheckedNewsData.length;i++){
                            this.unCheckedNewsData[i].createTime=this.unCheckedNewsData[i].startTime.replace("T"," ");
                        }
                    }
                    else if(state===1){
                        this.publishedNewsData=res.data;
                        for(let i=0;i<this.publishedNewsData.length;i++){
                            this.publishedNewsData[i].createTime=this.publishedNewsData[i].createTime.replace("T"," ");
                        }
                    }
                    else if(state===2){
                        this.ignoredNewsData=res.data;
                        for(let i=0;i<this.ignoredNewsData.length;i++){
                            this.ignoredNewsData[i].createTime=this.ignoredNewsData[i].createTime.replace("T"," ");
                        }
                    }
                    this.pictLoading=false;
                })
            },
            //分页处理
            handleCurrentChange(current){
                if(this.selectTab===1)this.loadOrder(0);
                if(this.selectTab===2)this.loadOrder(1);
                if(this.selectTab===3)this.loadOrder(2);
                this.currentPage=current;
            },
            //index切换处理
            handleSelect(e){
                this.selectTab =e;
                if(e === '1'){
                    this.loadOrder(0);
                    this.orderData = this.unCheckedOrder;}
                else if(e==='2'){
                    this.loadOrder(1);
                    this.orderData = this.checkedOrder2;}
                else if(e==='3'){
                    this.loadOrder(2);
                    this.orderData = this.checkedOrder3;}
            },
            //留言忽略处理
            handleUnCheck(row){
                this.$confirm('请再次确认是否忽略该留言?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'info',
                        message: '该留言已忽略'
                    });
                    this.newsData.splice(index, 1);
                    utils.request({
                        invoke: utils.api.auditComment,
                        params:{
                            commmentId:row.id,
                            auditStatus:2
                        }
                    }).then(res=>{
                        console.log(res);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '取消操作'
                    });
                });
            },
            //留言通过处理
            handleCheck(row){
                this.$confirm('请再次确认是否使得该留言所有人可见?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '留言已发布'
                    });
                    this.newsData.splice(index, 1);
                    utils.request({
                        invoke: utils.api.auditComment,
                        params:{
                            commmentId:row.id,
                            auditStatus:1
                        }
                    }).then(res=>{
                        console.log(res);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '取消操作'
                    });
                });
            }
        }
    }
</script>