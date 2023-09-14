<template>
  <div class="header-container pl40 flex align-center">
    <div class="flex align-center">
      <img src="@/assets/img/music.jpg" alt="" />
      <h3 class="ml20">网易云音乐</h3>
    </div>
    <div class="flex align-center ml160">
      <el-icon :size="20"><ArrowLeft /></el-icon>
      <el-icon :size="20"><ArrowRight /></el-icon>
      <el-popover
        placement="bottom"
        trigger="click"
        :width="300"
        @before-enter="getSearchHotDetail"
      >
        <template #reference>
          <el-input
            v-model="search"
            class="ml40"
            :placeholder="defaultSearch"
            :prefix-icon="Search"
          />
        </template>
        <div>热搜榜</div>
        <hot-item v-for="(item, index) in hotDetailList.arr" :key="item.searchWord" :num=index :hotItem=item />
      </el-popover>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { searchDefault, searchHotDetail } from "@/api/api_home.js";
import { Search } from "@element-plus/icons-vue";
import HotItem from "./HotItem.vue";
components: {
  HotItem
}
onMounted(() => {
  getSearchDefault();
});
const search = ref("");
const defaultSearch = ref("");
const hotDetailList = reactive({ arr: [] });
function getSearchDefault() {
  searchDefault().then((res) => {
    defaultSearch.value = res.data.showKeyword;
  });
}
function getSearchHotDetail() {
  searchHotDetail().then((res) => {
    console.log(res.data);
    hotDetailList.arr = res.data;
    console.log(hotDetailList.arr);
  });
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 10vh;
  background-color: #d4161a;
  width: 100vw;
  box-sizing: border-box;

  img {
    width: 30px;
    height: 30px;
  }

  .el-input {
    --el-input-focus-border-color: #e33e3e;
    --el-input-hover-border-color: #e33e3e;
    --el-input-border-color: #e33e3e;
  }

  ::v-deep .el-input__wrapper {
    border-radius: 30px;
    background: #e33e3e;
  }
}
</style>