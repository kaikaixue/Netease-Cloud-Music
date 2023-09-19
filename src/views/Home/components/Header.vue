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
        popper-style="padding: 0; height: 500px; overflow: auto; box-shadow: 0;"
        placement="bottom"
        :visible="showSearchPopover"
        :width="360"
        @before-enter="getSearchHotDetail"
      >
        <template #reference>
          <el-input
            id="searchInput"
            v-model="searchText"
            class="ml40"
            :placeholder="defaultSearch"
            :prefix-icon="Search"
            @input="getSearchSuggest"
            @focus="showSearchPopover = true"
            @keyup.enter="searchHotItem({ searchWord: searchText })"
            @blur="showSearchPopover = false"
          />
        </template>
        <div v-if="searchText.replace(/(^\s*)|(\s*$)/g, '').length == 0">
          <div v-if="searchList.length > 0" class="pl12">
            <div class="mt12 mb8 flex align-center">
              搜索历史&nbsp;&nbsp;<el-icon @click="clearSearchHistory"
                ><Delete
              /></el-icon>
            </div>
            <el-tag
              class="mb8 mr8 search-tag"
              v-for="(item, index) in searchList"
              :key="item.searchWord"
              color="#fff"
              disable-transitions
              closable
              round
              style="color: #000; border: 1px solid #e4e4e4; cursor: pointer"
              @click="searchBySearchHistory(item)"
              @close="closeSearchHistoryByItem(item, index)"
            >
              {{ item.searchWord }}
            </el-tag>
          </div>
          <div class="mt12 ml12 mb8">热搜榜</div>
          <hot-item
            @click="searchHotItem(item)"
            class="hot-item"
            v-for="(item, index) in hotDetailList.arr"
            :key="item.searchWord"
            :num="index"
            :hotItem="item"
          />
        </div>
        <div v-else>
          <!-- 单曲 -->
          <div
            class="mt10"
            v-if="
              searchSuggestList.state.songs &&
              searchSuggestList.state.songs.length > 0
            "
          >
            <div class="fs16 mb5 mt5 pl10 flex align-center">
              <el-icon class="mr5"><Headset /></el-icon>单曲
            </div>
            <div
              class="fs13 suggest-item text-cut pr10"
              v-for="song in searchSuggestList.state.songs"
              :key="song.id"
            >
              {{ song.name
              }}<span v-if="song.alias.length > 0">{{
                `(${song.alias[0]})`
              }}</span
              >-{{ song.artists[0].name }}
            </div>
          </div>
          <!-- 歌手 -->
          <div
            v-if="
              searchSuggestList.state.artists &&
              searchSuggestList.state.artists.length > 0
            "
          >
            <div class="fs16 mb5 mt5 pl10 flex align-center">
              <el-icon class="mr5"><Headset /></el-icon>歌手
            </div>
            <div
              class="fs13 suggest-item text-cut pr10"
              v-for="artist in searchSuggestList.state.artists"
              :key="artist.id"
            >
              {{ artist.name }}
            </div>
          </div>
          <!-- 专辑 -->
          <div
            v-if="
              searchSuggestList.state.albums &&
              searchSuggestList.state.albums.length > 0
            "
          >
            <div class="fs16 mb5 mt5 pl10 flex align-center">
              <el-icon class="mr5"><Headset /></el-icon>专辑
            </div>
            <div
              class="fs13 suggest-item text-cut pr10"
              v-for="album in searchSuggestList.state.albums"
              :key="album.id"
            >
              {{ album.name }}-{{ album.artist.name }}
            </div>
          </div>
          <!-- 歌单 -->
          <div
            v-if="
              searchSuggestList.state.playlists &&
              searchSuggestList.state.playlists.length > 0
            "
          >
            <div class="fs16 mb5 mt5 pl10 flex align-center">
              <el-icon class="mr5"><Headset /></el-icon>歌单
            </div>
            <div
              class="fs13 suggest-item text-cut pr10"
              v-for="playlist in searchSuggestList.state.playlists"
              :key="playlist.id"
            >
              {{ playlist.name }}
            </div>
          </div>
        </div>
      </el-popover>
      <MyInfo class="ml160"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed, toRefs } from "vue";
import {
  searchDefault,
  searchHotDetail,
  searchSuggest,
} from "@/api/api_home.js";
import { Search } from "@element-plus/icons-vue";
import HotItem from "./HotItem.vue";
import store from "@/store/index.js";
import MyInfo from "./myInfo/MyInfo.vue";

components: {
  HotItem, MyInfo
}
onMounted(() => {
  getSearchDefault();
});
const searchList = computed(() => store.state.search.searchList);
const searchText = ref("");
const defaultSearch = ref("");
const hotDetailList = reactive({ arr: [] });
let searchSuggestList = reactive({
  state: {},
});
const showSearchPopover = ref(false);
// 获取默认搜索关键词
function getSearchDefault() {
  searchDefault().then((res) => {
    defaultSearch.value = res.data.showKeyword;
  });
}
// 获取搜索推荐榜单
function getSearchHotDetail() {
  searchHotDetail().then((res) => {
    hotDetailList.arr = res.data;
  });
}
// 点击搜索推荐item，输入搜索
function searchHotItem(item) {
  if (!item.searchWord) return;
  searchList.value.push(item);
  store.commit("search/setSearchList", searchList);
}
// 点击搜索历史item搜索
function searchBySearchHistory(item) {}
// 删除某个搜索记录
function closeSearchHistoryByItem(item, index) {
  document.getElementById("searchInput").focus();
  searchList.value.splice(index, 1);
  store.commit("search/setSearchList", searchList);
}
// 清除所有搜索记录
function clearSearchHistory() {
  ElMessageBox.confirm("确定删除历史记录", {
    confirmButtonText: "确定",
    type: "warning",
    showCancelButton: false,
  })
    .then(() => {
      searchList.value.length = 0;
      store.commit("search/setSearchList", []);
    })
    .catch(() => {});
}
// 获取搜索建议
function getSearchSuggest() {
  // 判空
  if (searchText.value.replace(/(^\s*)|(\s*$)/g, "").length == 0) return;
  searchSuggest(searchText.value).then((res) => {
    if (res.code == 200) {
      searchSuggestList.state = res.result;
    } else {
      searchSuggestList.state = {};
    }
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

.suggest-item {
  height: 36px;
  line-height: 36px;
  padding-left: 30px;
  cursor: pointer;
}

.suggest-item:hover {
  background-color: #f2f2f2;
}

.search-tag:hover {
  background-color: #f2f2f2;
}

.hot-item:hover {
  background-color: #f2f2f2;
}
</style>