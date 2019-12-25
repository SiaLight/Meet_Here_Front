<template>
    <el-table
            :data="tableData"
            stripe
            style="width: 100%">
        <el-table-column type="expand">
            <template scope="props">
                <el-form label-position="left"  inline class="demo-table-expand" size="small" label-width="80px" >
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="名称">
                                <el-input
                                        size="small"
                                        placeholder="请输入内容"
                                        v-model="props.row.name">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="用户电话">
                                <el-input
                                        size="small"
                                        placeholder="请输入内容"
                                        v-model="props.row.phone">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="用户地址">
                                <el-input
                                        size="small"
                                        placeholder="请输入内容"
                                        v-model="props.row.address">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                   <el-row :gutter="20">
                       <el-col :span="8">
                           <el-form-item label="">
                               <el-button
                                       size="mini"
                                       type="primary"
                                       @click="handleEdit(props.$index,props.row)">确认修改</el-button>
                           </el-form-item>
                       </el-col>
                   </el-row>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="phone"
                label="电话"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, table)">删除</el-button>
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
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    phone: '153155622',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    phone: '153155622',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    phone: '153155622',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.table.splice(index, 1)
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
            handleEdit(index, row) {

            }
        }
    }
</script>