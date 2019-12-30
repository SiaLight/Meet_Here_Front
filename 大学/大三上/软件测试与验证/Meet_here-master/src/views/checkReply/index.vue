<template>
    <el-table
            :data="newsData"
            stripe
            style="width: 100%">
        <el-table-column
                prop="name"
                label="姓名"
                width="100">
        </el-table-column>
        <el-table-column
                prop="des"
                label="内容"
                width="180">
        </el-table-column>
        <el-table-column
                prop="stadium"
                label="场馆"
                width="100">
        </el-table-column>
        <el-table-column
                prop="time"
                label="留言时间"
                width="150">
        </el-table-column>
        <el-table-column label="审核状态">
            <template slot-scope="scope">
                <span v-if="scope.row.checked==1">已发布</span>
                <span v-else-if="scope.row.checked==2">已忽略</span>
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
</template>

<script>
    export default {
        data() {
            return {
                newsData: [{
                    name: '王小虎',
                    des:'场馆位置不错',
                    stadium:'体育馆',
                    time:'2019-10-12 8:30:00',
                    checked: 0
                }, {
                    name: '王小虎',
                    des:'场馆位置不错',
                    stadium:'体育馆',
                    time:'2019-10-12 8:30:00',
                    checked: 0
                }, {
                    name: '王小虎',
                    des:'场馆位置不错',
                    stadium:'体育馆',
                    time:'2019-10-12 8:30:00',
                    checked: 0
                }, {
                    name: '王小虎',
                    des:'场馆位置不错',
                    stadium:'体育馆',
                    time:'2019-10-12 8:30:00',
                    checked: 0
                }],
            }
        },
        methods:{
            //留言不通过处理
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
                    row.checked = 2;
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
                    row.checked = 1;
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