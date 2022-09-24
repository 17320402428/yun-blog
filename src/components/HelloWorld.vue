<!--
 * @Author: bin
 * @Date: 2022-09-21 09:51:48
 * @LastEditors: bin
 * @LastEditTime: 2022-09-23 11:32:56
 * @objectDescription: 入口文件
-->
<template>
  <button type="button" @click="onClick">count is: {{ count }}</button>
</template>
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import { login } from '@/api/user'

  
  const store = useStore()
  onMounted(() => {
    login({ account: 'admin', password: '123456' }).then((res:any) => {
      console.log(res)
    })
  })
  const count = computed(() => {
    return store.state.count
  })
  const onClick = () => {
    store.commit('increment')
  }
</script>
<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>
