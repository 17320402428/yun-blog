<!--
 * @Author: bin
 * @Date: 2023-04-27 09:24:08
 * @LastEditors: bin
 * @LastEditTime: 2023-11-24 09:40:30
 * @objectDescription: 入口文件
-->
<template>
  <div class="app-container">
    <el-card shadow="never" class="search-wrapper">
      <el-form ref="queryFormRef" inline :model="queryForm">
        <el-form-item prop="title" label="标签名称">
          <el-input v-model="queryForm.lableName" placeholder="请输入文章标题" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">查询</el-button>
          <el-button type="primary" @click="resetSearch">重置</el-button>
          <el-button type="primary" @click="dialogVisible = true">新增</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card shadow="never">
      <div class="table-wrapper">
        <el-table :data="tableData" border>
          <el-table-column prop="lableName" label="标签名称" align="center" />
          <el-table-column prop="creatAt" label="创建时间" align="center" />
          <el-table-column fixed="right" label="操作" width="250" align="center">
            <template #default="scope">
              <el-button type="success" link @click="handleUpdate(scope.row)">编辑</el-button>
              <el-button type="danger" link @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination v-model:current-page="queryForm.currentPage" v-model:page-size="queryForm.size"
            :page-sizes="[10, 20, 30, 40, 50]" @size-change="handleSizeChange" @current-change="handleCurrentChange"
            background layout="total, sizes, prev, pager, next" :total="total" />
        </div>
      </div>
    </el-card>
    <el-dialog v-model="dialogVisible" title="新增标签" width="30%">
      <el-form ref="addFormRef" :model="addForm">
        <el-form-item label="标签名">
          <el-input v-model="addForm.lableName" placeholder="请输入标签名"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitLabel">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { ElMessage, FormInstance, ElMessageBox } from 'element-plus'
import { getTableDataApi } from '@/api/label/index'
const loading = ref<boolean>(false)

// #region 查询
const tableData = ref([])
const total = ref<number>(0)
const queryFormRef = ref<FormInstance | null>(null)
const queryForm = reactive({
  currentPage: 1,
  size: 10,
  lableName: ''
})
const getTableData = () => {
  loading.value = true
  getTableDataApi(queryForm).then(res => {
    tableData.value = res.data.list
    total.value = res.data.total
  }).catch(() => {
    tableData.value = []
  }).finally(() => {
    loading.value = false
  })
}
getTableData()
const handleSearch = () => {
  getTableData()
}
const resetSearch = () => {
  queryFormRef.value.resetFields()
  getTableData()
}
const handleSizeChange = () => {
  getTableData()
}
const handleCurrentChange = () => {
  getTableData()
}
// #endregion

// #region 删除
const handleDelete = (e) => {
  ElMessageBox.confirm(
    '确认删除吗?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      })
    })
}
// #endregion

// #region 新增
const addFormRef = ref<FormInstance | null>(null)
const dialogVisible = ref<boolean>(false)
const addForm = reactive({
  lableName: '',
  lableId: ''
})
// #endregion

// #region 修改
const handleUpdate = (e) => {
  dialogVisible.value = true
  addForm.lableName = e.lableName
  addForm.lableId = e.lableId
}
const submitLabel = () => {

}
// #endregion
</script>

<style lang="scss" scoped></style>
