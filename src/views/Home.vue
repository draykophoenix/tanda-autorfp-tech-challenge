<script setup>
import PostItem from '../components/PostItem.vue';
import TitleBar from '../components/TitleBar.vue';


</script>

<template>
    <TitleBar/>
    <div class=content>
        <div class=postItems>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    </div>
</template>

<style scoped>
.content {
    margin: auto;
    background-color: aqua;
    width:50%
}
</style>