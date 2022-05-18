<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.body" class="prose mt-16 text-gray-500 prose-sm lg:prose "></div>
  </div>
</template>

<script>
import usePosts from "../api/usePosts";
import { onMounted } from "vue";
export default {
  props: {
    slug: {
      required: true,
      String,
    },
  },
  setup(props) {
    const  { post, fetchPost } = usePosts();
    
    onMounted(fetchPost(props.slug));
    return {post , fetchPost};
  },
};
</script>

<style></style>
