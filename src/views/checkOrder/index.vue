<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">未审核订单</el-menu-item>
            <el-menu-item index="2">已审核订单</el-menu-item>
        </el-menu>

    <el-table
            :data="orderData"
            stripe
            style="width: 100%">
        <el-table-column
                prop="user"
                label="用户"
                width="80">
        </el-table-column>
        <el-table-column
                prop="stadium"
                label="场馆"
                width="100">
        </el-table-column>
        <el-table-column
                prop="site"
                label="场地"
                width="100">
        </el-table-column>
        <el-table-column
                prop="rent"
                label="租金"
                width="80">
        </el-table-column>
        <el-table-column
                prop="startTime"
                label="开始日期"
                width="160">
        </el-table-column>
        <el-table-column
                prop="endTime"
                label="结束日期"
                width="160">
        </el-table-column>
        <el-table-column label="审核状态">
            <template slot-scope="scope">
                <span v-if="scope.row.checked==1">通过</span>
                <span v-else-if="scope.row.checked==2">不通过</span>
                <span v-else>
                    <el-button
                            @click="handleCheck(scope.row)"
                            size="small"
                            type="primary"
                            icon="edit">
                        <span >通过</span>
                    </el-button>
                    <el-button
                            @click="handleUnCheck(scope.$index,scope.row)"
                            size="small"
                            type="danger"
                            icon="delete">
                        <span>不通过</span>
                    </el-button>
                </span>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    import  utils from '../../utils'
    export default {
        data(){
            return {
                activeIndex:'1',
                totalNum: 0,
                pageSize: 2,
                currentPage:1,
                orderData:[],
                unCheckedOrder:[],
                checkedOrder:[],


                selectTab:''
            }
        },
        methods:{
            //订单不通过处理
            handleUnCheck(index,row){
                this.$confirm('请再次确认是否审核不通过?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'info',
                        message: '审核不通过'
                    });
                    this.orderData.splice(index, 1);
                    this.handleCheck()
                    row.checked = 2;
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '取消审核'
                    });
                });
            },
            //订单通过处理
            handleCheck(row){
                this.$confirm('请再次确认是否审核通过?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '审核通过'
                    });
                    row.checked = 1;
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '取消审核'
                    });
                });
            },
            handleSelect(e){
                this.selectTab =e;
                if(e === '1')
                    this.orderData = this.unCheckedOrder;
                else this.orderData = this.checkedOrder;
            },
            handleCurrentChange(index){
                this.initOrder(index);
            },
            initOrder(index){
                if(this.selectTab === '1')
                    this.orderData = this.unCheckedOrder[index];
                else
                    this.orderData =this.checkedOrder[index];
            },
        }
    }
</script>
<style scoped>

</style>