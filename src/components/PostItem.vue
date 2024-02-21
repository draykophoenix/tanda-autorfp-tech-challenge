<script setup>
import { ref } from 'vue'

</script>
<template>
    <div class="card">
        <div class="details">
            <span class="text" id="subreddit">r/demo</span>
            <span id="middot"> &middot; </span>
            <span class="text" id="postTime">2 hr. ago</span>
        </div>
        <div class="text" id="title">New Reddit just dropped</div>
        <div class="text" id="body">It's slightly worse</div>
    </div>
</template>

<style scoped>
    div {
        margin: 0.5em;
    }
    .card {
        background-color: greenyellow;
        margin: 1em;
        padding: 1em;
    }

    #subreddit {
        font-weight:600;
    }

    #postTime {
        color:gray
    }

    #title {
        font-size:large;
        font-weight:600;
    }

</style>