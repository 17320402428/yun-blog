<!--
 * @Author: bin
 * @Date: 2023-04-17 09:18:53
 * @LastEditors: bin
 * @LastEditTime: 2023-04-17 09:19:04
 * @objectDescription: 入口文件
-->
<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

router.replace({ path: "/" + route.params.path, query: route.query })
</script>

<template>
  <div />
</template>
