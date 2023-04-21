<!--
 * @Author: bin
 * @Date: 2023-04-19 08:13:06
 * @LastEditors: bin
 * @LastEditTime: 2023-04-21 13:46:04
 * @objectDescription: 入口文件
-->
<template>
  <div>
    <div>你的权限：{{ userStore.roles }}</div>
    <div class="switch-roles">
      <span>切换权限：</span>
      <el-radio-group v-model="switchRoles">
        <el-radio-button label="editor" />
        <el-radio-button label="admin" />
      </el-radio-group>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue"
import { useUserStore } from "@/store/modules/user"

const emit = defineEmits<{
  (e: "change"): void
}>()

const userStore = useUserStore()
const switchRoles = ref(userStore.roles[0])
watch(switchRoles, async (value) => {
  await userStore.changeRoles(value)
  emit("change")
})
</script>
<style lang="scss" scoped>
.switch-roles {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
</style>
