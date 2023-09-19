<template>
  <el-dialog v-model="dialogVisb" @open="getQRCode">
    <img :src="qrImgUrl" alt="" />
  </el-dialog>
</template>

<script setup>
import { onMounted, reactive, ref, computed, toRefs } from "vue";
import store from "@/store/index.js";
import {
  qrCodeLoginKey,
  qrCodeLoginImg,
  qrCodeLoginCheck,
  loginState,
} from "@/api/api_login.js";
import { ElMessage } from "element-plus";
const props = defineProps(["visible"]);
const emit = defineEmits(['update:visible'])
components: {
}
onMounted(() => {});
const qrImgUrl = ref("");
const dialogVisb = computed({
  get: () => {
    return props.visible;
  },
  set: (value) => {
    emit("update:visible", value);
  },
});
async function getQRCode() {
  let nowTime = new Date();
  // 获取key
  let key = (await qrCodeLoginKey(nowTime)).data.unikey;
  // 获取二维码图片
  qrImgUrl.value = (await qrCodeLoginImg(key)).data.qrimg;
  // 每三秒check一次
  let check = setInterval(async () => {
    let now = new Date().getTime();
    let res = await qrCodeLoginCheck(key, now).then();
    // 二维码已过期
    if (res.code == 800) {
      ElMessage({
        message: res.message,
        type: "warning",
      });
      clearInterval(check);
    }
    // 待确认
    // if (res.code == 802) {
    //   ElMessage({
    //     message: res.data.message,
    //     type: "warning",
    //   });
    //   clearInterval(check);
    // }
    // 授权成功
    if (res.code == 803) {
      ElMessage({
        message: res.message,
        type: 'success',
      })
      clearInterval(check)
      getInfo(res.cookie)
    }
  }, 3000);
}

function getInfo(cookie) {
  let nowTime = new Date();
  store.dispatch('user/getLoginState', nowTime, cookie)
  dialogVisb.value = false
}
</script>

<style lang="scss" scoped>
.info-container {
  width: 240px;
}
</style>