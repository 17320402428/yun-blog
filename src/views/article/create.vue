<!--
 * @Author: bin
 * @Date: 2023-05-16 17:14:47
 * @LastEditors: bin
 * @LastEditTime: 2023-12-14 10:01:48
 * @objectDescription: 入口文件
-->
<template>
  <div class="app-container">
    <el-card shadow="never" class="">
      <h3>新增文章</h3>
      <el-form ref="queryFormRef" labelPosition="top" :model="queryForm">
        <el-form-item prop="title" label="文章标题">
          <el-input v-model="queryForm.title" placeholder="请输入文章标题" />
        </el-form-item>
        <el-form-item prop="tags" label="标签">
          <el-input v-model="queryForm.tags" placeholder="请输入标签" />
        </el-form-item>
        <el-form-item prop="content" label="文章内容">
          <md-editor placeholder="请编写文章正文" v-model="queryForm.content" :showCodeRowNumber="true"
            @onUploadImg="onUploadImg" />
        </el-form-item>
        <div class="submit">
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { onMounted } from 'vue';
import { MdEditor } from "md-editor-v3";
import { createArticleApi, detailArticleApi, editArticleApi } from '@/api/article'
import { type FormInstance } from 'element-plus';
import { ref, reactive } from "vue";
import { getUserInfo } from '@/utils/cache/cookies'
import { useRouter } from "vue-router";
const router = useRouter()
const loading = ref<boolean>(false)
const queryFormRef = ref<FormInstance | null>(null)

// #region 新增
const queryForm = reactive({
  title: '',
  tags: "" as any,
  content: '',
  author: getUserInfo()
})
const handleSubmit = () => {
  if (router.currentRoute.value.query.id) {
    editArticle()
  }else {
    createArticle()
  }
}
const createArticle = () => {
  queryForm.tags = queryForm.tags.split(',')
  createArticleApi(queryForm).then(res => {
    loading.value = true
    if (res.code == 200) {
      loading.value = false
      ElMessage.success('新增成功')
      router.push({
        path: '/article/index',
      })
    }
  }).catch(() => {
    ElMessage.success('新增失败')
    loading.value = false
  }).finally(() => {
    loading.value = false
  })
}
const editArticle = () => {
  editArticleApi({
    id: router.currentRoute.value.query.id,
    userid: getUserInfo(),
    title: queryForm.title,
    tags: queryForm.tags.split(','),
    content: queryForm.content
  }).then(res => {
    loading.value = true
    if (res.code == 200) {
      loading.value = false
      ElMessage.success('修改成功')
      router.push({
        path: '/article/index',
      })
    }
  }).catch(() => {
    ElMessage.success('修改失败')
  }).finally(() => {
    loading.value = false
  })
}
// #endregion


onMounted(() => {
  if (router.currentRoute.value.query.id) {
    detailArticleApi({
      id: router.currentRoute.value.query.id
    }).then(res => {
      if (res.code == 200) {
        queryForm.title = res.data.data[0].title
        queryForm.content = res.data.data[0].content
        queryForm.tags = res.data.data[0].tags.map(item => item.tagName).join(',')
      }
    }).catch(() => {

    })
  }
})
const onUploadImg = () => {

}
</script>

<style lang="scss" scoped>
.submit {
  text-align: right;
}
</style>
