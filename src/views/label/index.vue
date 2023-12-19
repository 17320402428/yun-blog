<!--
 * @Author: bin
 * @Date: 2023-04-27 09:24:08
 * @LastEditors: bin
 * @LastEditTime: 2023-12-19 09:14:09
 * @objectDescription: 入口文件
-->
<template>
  <div class="app-container">
    <el-card shadow="never" class="search-wrapper">
      <el-form ref="queryFormRef" inline :model="queryForm">
        <el-form-item prop="title" label="标签名称">
          <el-input v-model="queryForm.tagName" placeholder="请输入标签名称" />
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
        <el-table v-loading="loading" :data="tableData" border>
          <el-table-column prop="tag_name" label="标签名称" align="center" />
          <el-table-column label="创建时间" align="center">
            <template #default="scope">
              <div>
                {{ timestampToTime(scope.row.createdAt) }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="更新时间" align="center">
            <template #default="scope">
              <div>
                {{ timestampToTime(scope.row.updatedAt) }}
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="250" align="center">
            <template #default="scope">
              <el-button type="success" link @click="handleUpdate(scope.row)">编辑</el-button>
              <el-button type="danger" link @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination v-model:current-page="queryForm.offset" v-model:page-size="queryForm.limit"
            :page-sizes="[10, 20, 30, 40, 50]" @size-change="handleSizeChange" @current-change="handleCurrentChange"
            background layout="total, sizes, prev, pager, next" :total="total" />
        </div>
      </div>
    </el-card>
    <el-dialog v-model="dialogVisible" :title="visibleTitle" width="30%">
      <el-form ref="addFormRef" :model="addForm">
        <el-form-item label="标签名">
          <el-input v-model="addForm.tagName" placeholder="请输入标签名" />
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
import { getTableDataApi, deleteTagApi, createTagApi, updateTagApi } from '@/api/label/index'
import { timestampToTime } from "@/utils/filter"

const loading = ref<boolean>(false)
const visibleTitle = ref<string>('新增标签')
// #region 查询
const tableData = ref([])
const total = ref<number>(0)
const queryFormRef = ref<FormInstance | null>(null)
const queryForm = reactive({
  offset: 1,
  limit: 10,
  tagName: ''
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
      loading.value = true
      deleteTagApi({
        id: e._id
      }).then(res => {
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
        getTableData()
      }).catch(() => {
        ElMessage({
          type: 'error',
          message: '删除失败',
        })
      }).finally(() => {
        loading.value = false
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
  tagName: '',
  id: ""
})
// #endregion

// #region 修改
const handleUpdate = (e) => {
  dialogVisible.value = true
  visibleTitle.value = '编辑标签'
  addForm.tagName = e.tag_name
  addForm.id = e._id
}
const submitLabel = () => {
  if (visibleTitle.value === '新增标签') {
    createTagApi(addForm).then(res => {
      ElMessage({
        type: 'success',
        message: '新增成功',
      })
      dialogVisible.value = false
      getTableData()
    }).catch(() => {
      ElMessage({
        type: 'error',
        message: '新增失败',
      })
    })
  }else {
    updateTagApi(addForm).then(res => {
      ElMessage({
        type: 'success',
        message: '修改成功',
      })
      dialogVisible.value = false
      getTableData()
    }).catch(() => {
      ElMessage({
        type: 'error',
        message: '修改失败',
      })
    })
    dialogVisible.value = false
    visibleTitle.value = '新增标签'
    addForm.tagName = ''
  }

}
// #endregion
</script>

<style lang="scss" scoped></style>
