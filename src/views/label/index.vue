<!--
 * @Author: bin
 * @Date: 2023-04-27 09:24:08
 * @LastEditors: bin
 * @LastEditTime: 2023-05-22 17:20:37
 * @objectDescription: 入口文件
-->
<template>
  <div class="app-container">
    <el-card shadow="never" class="search-wrapper">
      <el-form ref="queryFormRef" inline :model="queryForm">
        <el-form-item prop="title" label="标签名称">
          <el-input v-model="queryForm.labelName" placeholder="请输入文章标题" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handSearch">查询</el-button>
          <el-button type="primary" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card shadow="never">
      <div class="table-wrapper">
        <el-table :data="tableData">
          <el-table-column prop="labelName" label="标签名称" align="center" />
          <el-table-column prop="labelId" label="标签值" align="center" />
          <el-table-column prop="creatAt" label="创建时间" align="center" />
          <el-table-column fixed="right" label="操作" width="250" align="center">
            <template #default="scope">
              <el-button type="danger" link @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            v-model:current-page="queryForm.currentPage"
            v-model:page-size="queryForm.size"
            :page-sizes="[10, 20, 30, 40, 50]"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            layout="total, sizes, prev, pager, next"
            :total="total" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
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
  labelName: ''
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
const handSearch = () => {
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
</script>

<style lang="scss" scoped></style>
