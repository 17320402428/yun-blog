<!--
 * @Author: bin
 * @Date: 2022-09-21 09:51:48
 * @LastEditors: bin
 * @LastEditTime: 2023-04-17 11:05:10
 * @objectDescription: html入口文件
-->
<template>
	<ElConfigProvider :locale="locale">
		<router-view />
	</ElConfigProvider>
</template>
<script lang="ts" setup>
import { h } from 'vue'
// import { useTheme } from '@/hooks/useTheme'
import { ElNotification } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

// const { initTheme } = useTheme()

/** 初始化主题 */
// initTheme()
/** 将 Element Plus 的语言设置为中文 */
const locale = zhCn
</script>
