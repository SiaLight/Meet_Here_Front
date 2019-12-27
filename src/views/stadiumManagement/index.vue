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
                        width="120"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="场馆地址"
                        width="250"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="siteDetails"
                        label="场馆详情"
                        width="120">
                    <template scope="props">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="checkSiteDetails(props.$index,props.row)">查看
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="opp"
                        label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="primary"
                                @click="handleEdit(scope.$index, scope.row)">编辑
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

        <!--详情窗口-->
        <el-dialog
                title="场馆详情"
                :visible.sync="detailsFormVisible">
            <el-table
                    id="detailTable"
                    :data="siteData"
                    ref="siteData">
                <el-table-column
                        type="index"
                        label="序号"
                        width="50">
                </el-table-column>
                <el-table-column
                    prop="siteName"
                    label="场地名称"
                    width="80">
                </el-table-column>
                <el-table-column
                        prop="siteRent"
                        label="租金(/小时)"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="siteLocation"
                        label="场地位置"
                        width="150">
                </el-table-column>
                <el-table-column
                    prop="siteDescription"
                    label="场地描述"
                    width="140">
                </el-table-column>
                <el-table-column
                        prop="opp"
                        label="操作">
                    <template scope="props">
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDeleteSite(props.$index,siteData )">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div>
                <el-button
                        type="primary"
                        @click="addDetailRow()"
                >+ 添加场地</el-button>
                <el-button @click="cancel()">确认</el-button>
            </div>
        </el-dialog>

        <!-- 编辑场馆窗口 -->
        <el-dialog
                title="编辑场馆信息"
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

        <!-- 添加场馆窗口 -->
        <el-dialog
                title="添加场馆"
                :visible.sync="addFormVisible">
            <el-form
                    :model="addForm"
                    ref="addForm">
                <el-form-item
                        label="场馆名称"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="addForm.stadium"
                            placeholder="请输入场馆名称"
                            autocomplete="off">
                    </el-input>
                </el-form-item>

                <el-form-item
                        label="场地数量"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="addForm.siteNum"
                            placeholder="请输入场地数量"
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

        <!-- 添加场地窗口 -->
        <el-dialog
                title="添加场地"
                :visible.sync="detailsAddFormVisible">
            <el-form
                    :model="detailsAddForm"
                    ref="detailsAddForm">
                <el-form-item
                        label="场地名称"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="detailsAddForm.siteName"
                            placeholder="请输入场地名称"
                            autocomplete="off">
                    </el-input>
                </el-form-item>
                <el-form-item
                        label="场地租金"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="detailsAddForm.siteRent"
                            placeholder="请输入场地每小时租金"
                            autocomplete="off">
                    </el-input>
                </el-form-item>
                <el-form-item
                        label="场地数量"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="detailsAddForm.siteLocation"
                            placeholder="请输入场地位置"
                            autocomplete="off">
                    </el-input>
                </el-form-item>
                <el-form-item
                        label="场地描述"
                        :label-width="formLabelWidth">
                    <el-input
                            v-model="detailsAddForm.siteDescription"
                            type="textarea"
                            placeholder="请简要描述该场地"
                            autocomplete="off">
                    </el-input>
                </el-form-item>
            </el-form>
            <div>
                <el-button @click="cancel()">取消</el-button>
                <el-button
                        type="primary"
                        @click="submitAddDetailRow()"
                        :loading="addLoading"
                >确定</el-button>
            </div>
        </el-dialog>

        <el-pagination
                background
                class="page"
                layout="prev, pager, next"
                :current-page.sync="currentPage"
                @current-change="handleCurrentChange"
                :page-size="pageSize"
                :pager-count="5"
                :total="totalNum">
        </el-pagination>
    </div>
</template>

<script>
    import  utils from '../../utils'

    var _index; //定义一个全局变量，以获取行数据的行号
    export default {
        data() {
            return {
                checked: true,
                stadiumData: [],
                siteData:[],
                formLabelWidth: '120px',
                detailsFormVisible:false,//是否显示场馆详情窗口
                editFormVisible: false,//是否显示编辑场馆窗口
                editForm: [],
                addFormVisible: false,//是否显示新增场馆窗口
                addLoading: false,
                addForm: [],
                detailsAddFormVisible:false,//是否显示新增场地窗口
                detailsAddForm:[],

                //分页值
                activeIndex: '1',
                totalNum: 0,
                pageSize: 2,
                currentPage:1,

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
                utils.request({
                    invoke: utils.api.getStadium,
                    params: {

                    }
                })
            },

            //编辑数据
            handleEdit(index, row) {
                this.editFormVisible = true;
                this.editForm = Object.assign({}, row);
                _index = index;
                console.log(index, row);
                console.log(_index, row);
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

            //新增场馆数据
            addRow() {
                this.addFormVisible = true;
                this.addForm = {
                    stadium: '',
                    siteNum: '',
                    address: '',
                }
            },
            //新增场地数据
            addDetailRow(){
                this.detailsAddFormVisible=true;
                this.detailsAddForm = {
                    siteName:'',
                    siteRent:'',
                    siteLocation:'',
                    siteDescription:'',
                }
            },

            //将新增的场馆数据添加到表格中
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
            //将新增的场地数据加到表格中
            submitAddDetailRow(){
                this.siteData = this.siteData||[]
                this.siteData.push({
                    siteName:this.detailsAddForm.siteName,
                    siteRent:this.detailsAddForm.siteRent,
                    siteLocation:this.detailsAddForm.siteLocation,
                    siteDescription:this.detailsAddForm.siteDescription,
                })
                //storage.set('url', this.url);
                this.detailsAddFormVisible=false
            },

            cancel() {
                this.addFormVisible = false;
                this.editFormVisible = false;
                this.detailsFormVisible=false;
                this.detailsAddFormVisible=false;
            },
            //删除场馆数据
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该场馆, 是否继续?', '提示', {
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
            //删除场地数据
            handleDeleteSite(index,row){
                this.$confirm('此操作将永久删除该场地, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.siteData.splice(index, 1)
                    // storage.set('siteData', this.siteData)
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

            //查看详情
            checkSiteDetails(index,row){
                this.detailsFormVisible=true;
            }
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
