<template>
  <q-header class="row q-pa-md items-center bg-grey-9">
    <slot name="header" />
    <q-btn
      class="absolute-right q-ma-md q-pa-xs"
      title="더보기"
      flat
      icon="more_vert"
      @click="toggle_toolbar = !toggle_toolbar"
    />
  </q-header>

  <q-drawer side="right" v-model="toggle_toolbar" class="bg-grey-9" :width="75" :breakpoint="500">
    <slot name="toolbar" />
  </q-drawer>

  <q-page-container class="full-height bg-grey-9">
    <q-page class="q-pa-md">
      <slot name="content" />
    </q-page>
  </q-page-container>

  <q-footer>
    <div class="row items-end justify-end no-margin q-pa-md q-gutter-x-md bg-white">
      <slot name="footer" />
    </div>
  </q-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const toggle_toolbar = ref(false);
</script>
