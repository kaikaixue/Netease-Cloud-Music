<template>
  <div class="info-container">
    <div
      v-if="!account.id"
      @click="isShowLogin = true"
      class="flex align-center"
    >
      <el-icon class="mr8"><Avatar /></el-icon>
      <div>未登录</div>
    </div>
    <div v-else class="flex align-center">
      <img class="avatar mr10" :src="profile.avatarUrl" alt="" />{{
        profile.nickname
      }}
    </div>
    <LoginDialog v-model:visible="isShowLogin" />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed, toRefs } from "vue";
import store from "@/store/index.js";
import LoginDialog from "./LoginDialog.vue";

components: {
  LoginDialog;
}
onMounted(() => {});
const isShowLogin = ref(false);
const account = computed(() => store.state.user.account);
const profile = computed(() => store.state.user.profile);
</script>

<style lang="scss" scoped>
.info-container {
  width: 300px;
  .avatar {
    width: 24px;
    height: 24px;
  }
}
</style>