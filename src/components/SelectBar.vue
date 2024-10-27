<template>
  <van-tabbar v-model="active" @change="onActiveChange">
    <van-tabbar-item icon="gem-o">列表</van-tabbar-item>
    <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    <van-tabbar-item icon="exchange">发布</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const active = ref(0);

const onActiveChange = (index: number) => {
  console.log(index);
  switch (index) {
    case 0:
      router.push("/list");
      break;
    case 1:
      router.push("/my");
      break;
    case 2:
      router.push("/publish");
      break;
  }
};
</script>

<style scoped></style>
