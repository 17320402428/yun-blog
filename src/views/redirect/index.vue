<!--
 * @Author: bin
 * @Date: 2023-04-17 09:18:53
 * @LastEditors: bin
 * @LastEditTime: 2023-04-21 13:47:27
 * @objectDescription: 入口文件
-->
<template>
  <div />
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

router.replace({ path: "/" + route.params.path, query: route.query })
</script>
