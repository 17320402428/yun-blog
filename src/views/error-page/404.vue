<!--
 * @Author: bin
 * @Date: 2023-04-17 09:18:24
 * @LastEditors: bin
 * @LastEditTime: 2023-04-21 13:45:39
 * @objectDescription: 入口文件
-->
<template>
  <ErrorPageLayout>
    <Svg404 />
  </ErrorPageLayout>
</template>
<script lang="ts" setup>
import ErrorPageLayout from "./components/ErrorPageLayout.vue"
import Svg404 from "@/assets/error-page/404.svg?component" // vite-svg-loader 插件的功能
</script>
