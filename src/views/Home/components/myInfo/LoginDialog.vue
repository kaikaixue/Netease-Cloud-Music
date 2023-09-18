<template>
  <el-dialog>
    111
  </el-dialog>
</template>

<script setup>
import { onMounted, reactive, ref, computed, toRefs } from "vue";
import store from "@/store/index.js";
const props = defineProps(['isShow'])
components: {
}
onMounted(() => {});
</script>

<style lang="scss" scoped>
.info-container {
  width: 240px;
}
</style>