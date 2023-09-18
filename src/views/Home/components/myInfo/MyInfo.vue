<template>
  <div @click="isShowLogin = true" class="flex align-center info-container">
    <el-icon class="mr8"><Avatar /></el-icon>
    <div v-if="!account.id">未登录</div>
    <div v-else>111</div>
    <LoginDialog :isShow="isShowLogin"/>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed, toRefs } from "vue";
import store from "@/store/index.js";
import LoginDialog from './LoginDialog.vue'

components: {
  LoginDialog
}
onMounted(() => {});
const isShowLogin = ref(true)
const account = computed(() => store.state.user.account).value
</script>

<style lang="scss" scoped>
.info-container {
  width: 240px;
}
</style>