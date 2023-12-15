<!--
 * @Author: bin
 * @Date: 2023-04-27 09:23:19
 * @LastEditors: bin
 * @LastEditTime: 2023-12-15 17:20:00
 * @objectDescription: 入口文件
-->
<template>
  <div class="app-container">
    <el-card shadow="never" class="search-wrapper">
      <el-form ref="queryFormRef" inline :model="queryForm">
        <el-form-item prop="title" label="文章标题">
          <el-input v-model="queryForm.title" placeholder="请输入文章标题" />
        </el-form-item>
        <el-form-item prop="commentUserName" label="评论人">
          <el-input v-model="queryForm.commentUserName" placeholder="请输入评论人" />
        </el-form-item>
        <el-form-item prop="status" label="审核状态">
          <el-input v-model="queryForm.status" placeholder="请输入审核状态" />
        </el-form-item>
        <el-form-item prop="content" label="评论内容">
          <el-input v-model="queryForm.content" placeholder="请输入评论内容" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handSearch">查询</el-button>
          <el-button type="primary" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card shadow="never">
      <div class="table-wrapper">
        <el-table v-loading="loading" :data="tableData" border>
          <el-table-column prop="article_id.title" label="文章标题" align="center" />
          <el-table-column prop="user_id.nickname" label="评论人" align="center" />
          <el-table-column prop="content" label="评论内容" align="center" />
          <el-table-column prop="status" label="审核状态" align="center">
            <template #default="scope">
              <el-tag class="mx-1" type="success" effect="plain" round v-if="scope.row.status == '2'">
                通过
              </el-tag>
              <el-tag class="mx-1" type="danger" effect="plain" round v-else>
                未通过
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="createdAt" label="创建时间" align="center">
            <template #default="scope">
              <div>
                {{ timestampToTime(scope.row.createdAt) }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="updatedAt" label="更新时间" align="center">
            <template #default="scope">
              <div>
                {{ timestampToTime(scope.row.updatedAt) }}
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="250" align="center">
            <template #default="scope">
              <el-button type="success" link @click="handlePass(scope.row, 2)">通过</el-button>
              <el-button type="danger" link @click="handlePass(scope.row, 1)">不通过</el-button>
              <el-button type="warning" link @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            v-model:current-page="queryForm.offset"
            v-model:page-size="queryForm.limit"
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
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'
import type { IGetTableData } from '@/api/comment/types/comment'
import { getTableDataApi, commentPassApi, deleteCommentApi } from '@/api/comment'
import { timestampToTime } from "@/utils/filter"

const loading = ref<boolean>(false)
// #region 查询
const tableData = ref<IGetTableData[]>([])
const total = ref<number>(0)
const queryFormRef = ref<FormInstance | null>(null)
const queryForm = reactive({
  content: '',
  status: "",
  offset: 1,
  limit: 10,
  title: '',
  commentUserName: '',
})
const getTableData = () => {
  loading.value = true
  getTableDataApi(queryForm).then(res => {
    tableData.value = res.data.data
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

// #region 修改
const handlePass = (e, status) => {
  loading.value = true
  commentPassApi({
    id: e._id,
    status: status
  }).then(res => {
    ElMessage({
      type: 'success',
      message: '操作成功',
    })
    getTableData()
  }).catch(() => {
    ElMessage({
      type: 'error',
      message: '操作失败',
    })
  }).finally(() => {
    loading.value = false
  })
}
const handleDelete = (e) => {
  loading.value = true
  deleteCommentApi({
    id: e._id
  }).then(res => {
    ElMessage({
      type:'success',
      message: '操作成功',
    })
    getTableData()
  }).catch(() => {
    ElMessage({
      type: 'error',
      message: '操作失败',
    })
  }).finally(() => {
    loading.value = false
  })
}
// #endregion
</script>

<style lang="scss" scoped></style>
