<template>
    <div>
        <div>
        <el-button type="primary" icon="el-icon-plus" class="plus" @click="handleAdd">添加</el-button>
            <el-dialog title="添加场馆" :visible.sync="dialogFormVisible"  size="small">
                <addStadium></addStadium>
            </el-dialog>
    </div>
        <el-table
            :data="stadiumData"
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
                label="名称"
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
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    import addStadium from '../../components/addStadium'
    export default {
        data() {
            return {
                stadiumData: [{
                    phone: '153155622',
                    name: '体育馆',
                    address: '上海市普陀区金沙江路 1518 弄',
                    site: []
                }, {
                    phone: '153155622',
                    name: '羽毛球馆',
                    address: '上海市普陀区金沙江路 1517 弄',
                    site: []
                }, {
                    phone: '153155622',
                    name: '网球馆',
                    address: '上海市普陀区金沙江路 1519 弄',
                    site: []
                }, {
                    phone: '153155622',
                    name: '篮球馆',
                    address: '上海市普陀区金沙江路 1516 弄',
                    site: []
                }],
                dialogFormVisible: false
            }
        },
        components:{addStadium},
        methods:{
            handleAdd(){
                this.dialogFormVisible =true

            }
        }
    }
</script>
<style scoped>
    .plus{
        float: left;
        margin-bottom: 10px;
    }

</style>