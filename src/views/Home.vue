<script setup>
import { watch } from 'vue';
import PostItem from '../components/PostItem.vue';
import TopBar from '../components/TopBar.vue';

const props = defineProps(["bearerToken"])

async function fetchHot(token) {
    const res = await fetch("https://oauth.reddit.com/r/test/hot", { headers: { 'Authorization': 'Bearer ' + token } })
    const data = await res.json()
    console.log(data)
}

if (props.bearerToken) {
    fetchHot(props.bearerToken)
}

watch(() => props.bearerToken,
    token => {
        fetchHot(token)
    })


</script>

<template>
    <TopBar />
    <div class=content>
        <div class=postItems>
            <PostItem />
            <PostItem />
            <PostItem />
            <p>{{ props.bearerToken }}</p>
        </div>
    </div>
</template>

<style scoped>
.content {
    margin: auto;
    background-color: aqua;
    width: 50%
}
</style>