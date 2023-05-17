<!--
 * @Author: bin
 * @Date: 2023-05-16 17:14:47
 * @LastEditors: bin
 * @LastEditTime: 2023-05-17 16:04:02
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
        <el-form-item prop="title" label="文章分类">
          <el-input v-model="queryForm.classification" placeholder="请输入文章分类" />
        </el-form-item>
        <el-form-item prop="title" label="文章内容">
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
import { MdEditor } from "md-editor-v3";
import type { FormInstance } from 'element-plus';
import { ref, reactive } from "vue";
const loading = ref<boolean>(false)
const queryFormRef = ref<FormInstance | null>(null)
const queryForm = reactive({
  title: '',
  classification: '',
  content: ''
})
const handleSubmit = () => {

}
const onUploadImg = () => {

}
</script>

<style lang="scss" scoped>
.submit {
  text-align: right;
}
</style>
