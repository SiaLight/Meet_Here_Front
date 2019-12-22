<template>
    <el-table
            :data="tableData"
            stripe
            style="width: 100%">

        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="phone"
                label="电话"
                width="200">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址"
                width="300">
        </el-table-column>

        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        :type="scope.row.type"
                        @click="handleAuthority(scope.row)">
                    <span v-if="scope.row.advanced">管理员(已为最高权限)</span>
                    <span v-else>普通用户(单击升级权限)</span>
                </el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, tableData)">删除用户
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    phone: '153155622',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    advanced:false
                }, {
                    phone: '153155622',
                    name: '李小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    advanced:false
                }, {
                    phone: '153155622',
                    name: '文小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    advanced:false
                }, {
                    phone: '153155622',
                    name: '张小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    advanced:false
                }]
            }
        },
        methods: {
            handleDelete(index,tableData) {
                this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.tableData.splice(index, 1)
                    this.$message({
                        type: 'success',
                        message: '删除成功',
                    })
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: "取消删除"
                    })
                })
            },
            handleAuthority(row) {
                this.$confirm('此操作将升级用户权限为管理员, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '升级成功',
                    });
                   row.advanced=true;
                   row.type = 'success'
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: "取消修改"
                    })
                })

            }
        }
    }
</script>