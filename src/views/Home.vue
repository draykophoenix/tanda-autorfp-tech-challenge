<script setup>
import { computed, ref, watch } from 'vue';
import PostItem from '../components/PostItem.vue';
import TopBar from '../components/TopBar.vue';

const props = defineProps(["bearerToken"])

const articles = ref()

const isAuth = computed(() => {
    return !!props.bearerToken
})

async function fetchHot(token, subreddit) {
    const res = await fetch(`https://oauth.reddit.com/${subreddit}/hot`, { headers: { 'Authorization': 'Bearer ' + token } })
    const data = await res.json()
    articles.value = data.data.children.map(article => {
        return {
            subreddit: article.data.subreddit_name_prefixed,
            postTime: article.data.created,
            title: article.data.title,
            body: article.data.selftext,
        }
    })
}

if (props.bearerToken) {
    fetchHot(props.bearerToken, "r/Jokes")
}

watch(() => props.bearerToken,
    token => {
        fetchHot(token, "r/Jokes")
    })


</script>

<template>
    <TopBar :isAuth=isAuth />
    <div class=content>
        <div class=postItems v-for="article in articles">
            <PostItem v-bind="article" />
        </div>
    </div>
</template>

<style scoped>
.content {
    margin: auto;
    padding: 1em 0;
    background-color: gainsboro;
    width: 50%
}
</style>