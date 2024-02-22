<script setup>
import { ref, watch } from 'vue';
import Home from './views/Home.vue';
import { useRoute } from 'vue-router';
import { retrieveToken } from '../src/utils/redditAuth';

const route = useRoute()

// Slight hack, same authState accross all sessions.
var authState = localStorage.getItem('authState');
if (!authState) {
  const newState = Math.floor(Math.random() * 10000);
  localStorage.setItem('authState', newState);
  console.log(`New authState set:${newState}`)
  authState = newState;
}

watch(
  () => route.query,
  async query => {
    if (query.code) {
      if (query.state === authState) {
        const bearerToken = await retrieveToken(query.code)

        // Probably not secure
        localStorage.setItem('bearerToken', bearerToken);
      } else {
        console.log("Your tokens' a broken'")
      }
    }
  }
)

</script>

<template>
  <Home />
</template>
