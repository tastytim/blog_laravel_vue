<template>
  <div>
    <div v-for="post in posts" :key="post.uuid">
      <router-link :to="{ name: 'post', params: {slug: post.slug } }">
        <h1>{{ post.title }}</h1>
        <h2>{{ post.teaser }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import usePosts from "../api/usePosts";
import {useStore} from 'vuex'
export default {
  setup() {
    const { posts, fetchPosts } = usePosts();
    const store = useStore();
    console.log(store.getters)
    onMounted(fetchPosts);
    return { posts };
  },
};
</script>

<style></style>
