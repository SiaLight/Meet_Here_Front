<template>
    <div id="table">

        <!--添加按钮-->
        <el-row>
            <el-col :span="24">
                <div class="table-grid-address">
                    <el-button
                            type="primary"
                            @click="addRow()"
                    >+ 添加场馆</el-button>
                </div>
            </el-col>
        </el-row>

        <!-- 表格 -->
        <div class="Table-table">
            <el-table
                    id="table"
                    :data="stadiumData"
                    ref="stadiumData"
                    height="600"
                    border>
                <el-table-column
                        type="index"
                        label="序号"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="stadium"
                        label="场馆名称"
                        width="200"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="siteNum"
                        label="场地数目"
                        width="200"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="场馆地址"
                        width="300"
                        sortable>
                </el-table-column>

                <el-table-column
                        prop="opp"
                        label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="primary"
                                @click="handleEdit(scope.$index, scope.row)">修改
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index,stadiumData )">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 编辑窗口 -->
        <el-dialog
                siteNum="编辑"
                :visible.sync="editFormVisible">
            <el-form
                    :model="editForm"
                    ref="editForm">
                <el-form-item
                        label="场馆名称"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="editForm.stadium"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="场地数目"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="editForm.siteNum"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="场馆地址"
                        :label-width="formLabelWidth">
                    <el-input
                            type="textarea"
                            v-model="editForm.address"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

            </el-form>

            <div>
                <el-button @click="cancel()">取消</el-button>
                <el-button
                        type="primary"
                        v-on:click="submitEditRow()"
                        :loading="addLoading"
                >确定</el-button>
            </div>

        </el-dialog>

        <!-- 发布窗口 -->
        <el-dialog
                siteNum="发布"
                :visible.sync="addFormVisible">
            <el-form
                    :model="addForm"
                    ref="addForm">
                <el-form-item
                        label="场馆名称"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="addForm.stadium"
                            placeholder="请输入场馆名字"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="场地数目"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="addForm.siteNum"
                            placeholder="请输入场地数目"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="场馆地址"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="addForm.address"
                            type="textarea"
                            placeholder="请输入场馆地址"
                            autocomplete="off">
                    </el-input>
                </el-form-item>
            </el-form>
            <div>
                <el-button @click="cancel()">取消</el-button>
                <el-button
                        type="primary"
                        @click="submitAddRow()"
                        :loading="addLoading"
                >确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

    var _index; //定义一个全局变量，以获取行数据的行号
    export default {
        data() {
            return {
                checked: true,
                stadiumData: [],
                formLabelWidth: '120px',
                editFormVisible: false,//是否显示编辑窗口
                editForm: [],
                addFormVisible: false,//是否显示新增窗口
                addLoading: false,
                addForm: [],

                //日期
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
            }
        },
        methods: {
            //获取数据
            getData() {
                var url = 'static/table.json';
                this.$http.get(url).then((data) => {
                    console.log(data)
                    this.stadiumData = data.body;
                }).catch((err) => {
                    console.log(err)
                })
            },

            //编辑数据
            handleEdit(index, row) {
                this.editFormVisible = true;
                this.editForm = Object.assign({}, row);
                _index = index;
                // console.log(index)
                // console.log(_index)
                //取到这一栏的值，也就是明白是在那一栏进行操作，从而将编辑后的数据存到表格中
            },
            //保存编辑
            submitEditRow() {
                var editData = _index;
                this.stadiumData[editData].stadium = this.editForm.stadium;
                this.stadiumData[editData].siteNum = this.editForm.siteNum;
                this.stadiumData[editData].address = this.editForm.address;
                this.editFormVisible = false;
            },

            //新增数据
            addRow() {
                this.addFormVisible = true;
                this.addForm = {
                    stadium: '',
                    siteNum: '',
                    address: '',
                }
            },
            //将新增的数据添加到表格中
            submitAddRow() {
                this.stadiumData = this.stadiumData || []
                this.stadiumData.push({
                    stadium: this.addForm.stadium,
                    siteNum: this.addForm.siteNum,
                    address: this.addForm.address,
                })
                //storage.set('url', this.url);
                this.addFormVisible = false
            },
            cancel() {
                this.addFormVisible = false;
                this.editFormVisible = false;
            },

            //删除数据
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该场地, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.stadiumData.splice(index, 1)
                    // storage.set('stadiumData', this.stadiumData)
                    this.$message({
                        type: 'success',
                        message: '删除成功',
                    })
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '取消删除',
                    })
                })
            },
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style>
    .table-grid-address {
        border-radius: 4px;
        height: 50px;
        background: #ebeef5;
        padding: 10px;
        float: left;
    }

    .Table-table {
        padding: 5px;
    }
    .el-table td {
        padding: 0px;
    }
    .el-table th {
        padding: 0px;
    }
</style>
