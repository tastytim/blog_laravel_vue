<template>
  <div>
    <div v-for="post in posts" :key="post.uuid">
      <router-link :to="{ name: 'post', params: {slug: post.slug } }">
        <h1 class="text-4xl font-extrabold">{{ post.title }}</h1>
        <h2 class="text-xl">{{ post.teaser }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import usePosts from "../api/usePosts";
export default {
  setup() {
    const { posts, fetchPosts } = usePosts();
    onMounted(fetchPosts);
    return { posts };
  },
};
</script>

<style></style>
