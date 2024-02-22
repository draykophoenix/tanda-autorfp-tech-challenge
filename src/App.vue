<script setup>
import { ref, watch } from 'vue';
import Home from './views/Home.vue';
import { useRoute } from 'vue-router';
import { retrieveToken } from '../src/utils/redditAuth';

const route = useRoute()

const bearerToken = ref()

const token = localStorage.getItem('bearerToken');
console.log(token)
if (token) {
  bearerToken.value = token
}


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
    // If the user has been redirected from Reddit's OAuth page, and the state is correct
    if (query.code && query.state === authState) {
      const resToken = await retrieveToken(query.code)

      // Only updates the token on first retrieval
      if (resToken) {
        bearerToken.value = resToken
        // Probably not secure
        localStorage.setItem('bearerToken', bearerToken.value);
      }
    }
  }
)

</script>

<template>
  <Home :bearerToken=bearerToken />
</template>
