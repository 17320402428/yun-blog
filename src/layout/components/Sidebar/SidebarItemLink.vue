<!--
 * @Author: bin
 * @Date: 2023-04-17 08:49:19
 * @LastEditors: bin
 * @LastEditTime: 2023-04-21 13:43:16
 * @objectDescription: 入口文件
-->
<template>
  <a v-if="isExternal(props.to)" :href="props.to" target="_blank" rel="noopener">
    <slot />
  </a>
  <router-link v-else :to="props.to">
    <slot />
  </router-link>
</template>
<script lang="ts" setup>
import { isExternal } from "@/utils/validate"

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>
