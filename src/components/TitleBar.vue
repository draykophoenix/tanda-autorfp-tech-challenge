<script setup>
import { ref } from 'vue'
import { createAuthorizeURL } from '../utils/redditAuth';

// Slight hack, same authState accross all sessions.
var authState = localStorage.getItem('authState');

const authorizeURL = ref(createAuthorizeURL(authState));

</script>
<template>
  <header>
    <h1>Reddit 2</h1>
    <div id="auth">
      <a :href=authorizeURL>
        <button>Authenticate</button>
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  margin: 0 2em;
  display: flex;
  justify-content: space-between;
}
</style>