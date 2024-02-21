<script setup>
import { ref } from 'vue'

</script>
<template>
    <header>
        <h1>Reddit 2</h1>
        <div id="auth">
          <a href="https://www.reddit.com/api/v1/authorize?
client_id=h4S3l2XkCCXeiqjERXO-5g
&response_type=code
&state=MY_STATE_STRING
&redirect_uri=http://35.197.175.96/
&duration=temporary
&scope=identity">
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