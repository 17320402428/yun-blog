<!--
 * @Author: bin
 * @Date: 2023-04-24 15:10:53
 * @LastEditors: bin
 * @LastEditTime: 2023-05-17 09:09:42
 * @objectDescription: 入口文件
-->
<template>
  <div class="app-container">
    <el-card shadow="never" class="search-wrapper">
      <el-form ref="queryFormRef" inline :model="queryForm">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="queryForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="phone" label="手机号">
          <el-input v-model="queryForm.phone" placeholder="请输入手机号" />
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
          <el-table-column prop="username" label="用户名" align="center" />
          <el-table-column prop="email" label="邮箱地址" align="center" />
          <el-table-column prop="phone" label="手机号" align="center" />
          <el-table-column prop="creatAt" label="创建时间" align="center" />
          <el-table-column fixed="right" label="操作" width="250" align="center">
            <template #default="scope">
              <!-- <el-button type="primary" @click="handleUpdate">修改</el-button> -->
              <el-button type="danger" plain @click="handleDelete">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </div>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus';
import type { IGetTableData } from '@/api/user/types/user'
import { getTableDataApi } from '@/api/user'
const loading = ref<boolean>(false)
// #region 查询
const tableData = ref<IGetTableData[]>([])
const total = ref<number>(null)
const queryFormRef = ref<FormInstance | null>(null)
const queryForm = reactive({
  username: '',
  phone: '',
  currentPage: 1,
  size: 10
})
const getTableData = () => {
  loading.value = true
  getTableDataApi(queryForm).then(res => {
    console.log(res.data);
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
// #endregion

// #region 修改
const handleUpdate = () => {

}
const handleDelete = () => {

}
// #endregion
</script>
<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
