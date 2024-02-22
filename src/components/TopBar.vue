<script setup>
import { ref } from 'vue'
import { createAuthorizeURL } from '../utils/redditAuth';

const props = defineProps(["isAuth"])

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
      <q-btn class="btn" color="negative" text-color="white" label="Logout" @click="clear()" v-if="props.isAuth" />
      <a :href=authorizeURL>
        <q-btn color="positive" text-color="white" label="Authenticate" v-if="!props.isAuth" />
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