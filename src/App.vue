<script setup>
import { ref, watch } from 'vue';
import Home from './views/Home.vue';
import { useRoute } from 'vue-router';
import { retrieveToken } from '../src/utils/redditAuth';

const route = useRoute()

watch(
  () => route.query,
  async query => {
    if (query.code) {
      retrieveToken("STATE", query.code)
    }
  }
)

</script>

<template>
  <Home />
</template>
