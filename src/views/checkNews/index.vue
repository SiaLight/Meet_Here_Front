<template>
    <div id="table">

        <!--发布按钮-->
        <el-row>
            <el-col :span="24">
                <div class="table-grid-content">
                    <el-button
                            type="primary"
                            @click="addRow()">+ 发布新闻
                    </el-button>
                </div>
            </el-col>
        </el-row>

        <!-- 表格 -->
        <div class="Table-table">
            <el-table
                    id="table"
                    :data="newsData"
                    ref="newsData"
                    height="600"
                    border>
                <el-table-column
                        type="index"
                        label="序号"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="author"
                        label="作者"
                        width="100"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="新闻标题"
                        width="150"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="content"
                        label="新闻内容"
                        width="240"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="新闻发布时间"
                        width="180"
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
                                @click="handleDelete(scope.$index,newsData )">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    class="page"
                    layout="total,prev, pager, next"
                    :current-page.sync="currentPage"
                    @current-change="handleCurrentChange"
                    :page-size="pageSize"
                    :pager-count="5"
                    :total="totalNum">
            </el-pagination>
        </div>

        <!-- 编辑窗口 -->
        <el-dialog
                title="编辑"
                :visible.sync="editFormVisible">
            <el-form
                    :model="editForm"
                    ref="editForm">
                <el-form-item
                        label="姓名"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="editForm.author"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="新闻标题"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="editForm.title"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="新闻内容"
                        :label-width="formLabelWidth">
                    <el-input
                            type="textarea"
                            v-model="editForm.content"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="新闻发布时间"
                        :label-width="formLabelWidth">
                    <el-date-picker
                            v-model="editForm.date"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                    </el-date-picker>
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
                title="发布"
                :visible.sync="addFormVisible">
            <el-form
                    :model="addForm"
                    ref="addForm">
                <el-form-item
                        label="作者"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="addForm.author"
                            placeholder="请输入您的名字"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="新闻标题"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="addForm.title"
                            placeholder="请输入新闻标题"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="新闻内容"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="addForm.content"
                            type="textarea"
                            placeholder="请输入新闻内容"
                            autocomplete="off">
                    </el-input>
                </el-form-item>
                <!--暂时设置为可以自行选择日期-->
                <el-form-item
                        label="新闻发布时间"
                        :label-width="formLabelWidth">
                    <el-date-picker
                            v-model="addForm.date"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                    </el-date-picker>
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
                newsData: [],
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
                    this.newsData = data.body;
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
                this.newsData[editData].author = this.editForm.author;
                this.newsData[editData].title = this.editForm.title;
                this.newsData[editData].content = this.editForm.content;
                this.newsData[editData].date = this.editForm.date;
                this.editFormVisible = false;
            },

            //新增数据
            addRow() {
                this.addFormVisible = true;
                this.addForm = {
                    author: '',
                    title: '',
                    content: '',
                    date: ''
                }
            },
            //将新增的数据添加到表格中
            submitAddRow() {
                this.newsData = this.newsData || []
                this.newsData.push({
                    author: this.addForm.author,
                    title: this.addForm.title,
                    content: this.addForm.content,
                    date: this.addForm.date,
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
                this.$confirm('此操作将永久删除该条新闻, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.newsData.splice(index, 1)
                    // storage.set('newsData', this.newsData)
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
    .table-grid-content {
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
