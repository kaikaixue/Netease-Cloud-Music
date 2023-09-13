<template>
  <div class="header-container pl40 flex align-center">
    <div class="flex align-center">
      <img src="@/assets/img/music.jpg" alt="">
      <h3 class="ml20">网易云音乐</h3>
    </div>
    <div class="flex align-center ml160">
      <el-icon :size="20"><ArrowLeft /></el-icon>
      <el-icon :size="20"><ArrowRight /></el-icon>
      <el-input
      v-model="search"
      class="w-50 m-2"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { searchDefault } from '@/api/api_home.js'
onMounted(() => {
  getSearchDefault()
})
const search = ref("")
function getSearchDefault() {
  searchDefault().then(res => {
    console.log(res)
  })
}
</script>

<style lang="scss" scoped>

.header-container {
  height: 10vh;
  background-color: #D4161A;
  width: 100vw;
  box-sizing: border-box;

  img {
    width: 30px;
    height: 30px;
  }
}
</style>