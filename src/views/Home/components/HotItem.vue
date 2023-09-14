<template>
  <div class="flex algin-center item-container">
    <div class="fs20" :style="{}">{{ num }}</div>
    <div>
      <div>
        <span>{{ hotItem.searchWord }}</span>
        <img v-if="hotItem.iconType" :src="hotItem.iconUrl" alt="" />
        <span>{{ hotItem.score }}</span>
      </div>
      <div>{{ hotItem.content }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["num", "hotItem"]);
</script>

<style lang="scss" scoped>
.item-container {
    height: 80px;
}
</style>