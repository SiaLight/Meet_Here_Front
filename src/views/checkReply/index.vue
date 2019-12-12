<template>
    <el-table
            :data="newsData"
            stripe
            style="width: 100%">
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="des"
                label="内容"
                width="180">
        </el-table-column>
        <el-table-column
                prop="stadium"
                label="场馆">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        :type="scope.row.type"
                        @click="handleCheck(scope.row)">
                    <span v-if="scope.row.isCheck">审核通过</span>
                    <span v-else>未审核</span>
                </el-button>

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
                    isCheck: false,
                    type:'danger'
                }, {
                    name: '王小虎',
                    des:'场馆位置不错',
                    stadium:'体育馆',
                    isCheck: false,
                    type:'danger'
                }, {
                    name: '王小虎',
                    des:'场馆位置不错',
                    stadium:'体育馆',
                    isCheck: false,
                    type:'danger'
                }, {
                    name: '王小虎',
                    des:'场馆位置不错',
                    stadium:'体育馆',
                    isCheck: false,
                    type:'danger'
                }],
            }
        },
        methods:{
            handleCheck(row){
                console.log(row);
                this.$confirm('请再次确认是否审核通过?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '审核通过!'
                    });
                    row.isCheck = true;
                        row.type = 'success'
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '审核未通过'
                    });
                });

            }
        }
    }
</script>