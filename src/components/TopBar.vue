<script setup>
import { ref } from 'vue'
import { createAuthorizeURL } from '../utils/redditAuth';

// Slight hack, same authState accross all sessions.
var authState = localStorage.getItem('authState');
const authorizeURL = createAuthorizeURL(authState);

function clear() {
  localStorage.clear()
  location.reload()
}

</script>
<template>
  <header>
    <h3>Reddit 2</h3>
    <div id="auth">
      <q-btn class="btn" color="white" text-color="black" label="Logout" @click="clear()" />
      <a :href=authorizeURL>
        <q-btn color="white" text-color="black" label="Authenticate" />
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  margin: 0 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  margin: 1em;
}
</style>