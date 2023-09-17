<template>
  <div class="flex algin-center item-container pl20 ">
    <div class="fs16 mr5 lh50 w28" :style="[num < 3 ? 'color: #FF5959' : '']">{{ num + 1 }}</div>
    <div class="flex flex-direction justify-center">
      <div class="flex align-center">
        <span class="fs12" style="font-weight: bold;">{{ hotItem.searchWord }}</span>
        <img class="icon-hot ml8" v-if="hotItem.iconType == 1" :src="hotItem.iconUrl" alt="" />
        <img class="icon-top ml8" v-if="hotItem.iconType == 5" :src="hotItem.iconUrl" alt="" />
        <span class="fs12 ml8" style="color: #CACACA;">{{ hotItem.score }}</span>
      </div>
      <div v-if="hotItem.content" class="fs12" style="color: #919191;">{{ hotItem.content }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["num", "hotItem"]);
</script>

<style lang="scss" scoped>
.item-container {
    height: 50px;
    .icon-hot {
      width: 24px;
      height: 16px;
    }
    .icon-top {
      width: 16px;
      height: 16px;
    }
}
</style>