<script setup>
import { ref } from 'vue'
import moment from 'moment';

const props = defineProps(["subreddit", "postTime", "title", "body"])

</script>
<template>
    <div class="card">
        <div class="details">
            <span class="text" id="subreddit">{{ props.subreddit }}</span>
            <span id="middot"> &middot; </span>
            <span class="text" id="postTime">{{ moment(props.postTime, "X").fromNow() }}</span>
        </div>
        <div class="text" id="title">{{ props.title }}</div>
        <div class="text" id="body">{{ props.body }}</div>
    </div>
</template>

<style scoped>
div {
    margin: 0.5em;
}

.card {
    background-color: whitesmoke;
    margin: 1em;
    padding: 1em;
}

#subreddit {
    font-weight: 600;
}

#postTime {
    color: gray
}

#title {
    font-size: large;
    font-weight: 600;
}
</style>