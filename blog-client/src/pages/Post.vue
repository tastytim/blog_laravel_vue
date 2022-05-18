<template>
  <div class="w-full border-2 border-red-300 rounded" >

    <h1 class="my-6 w-full text-4xl lg:text-6xl leading-10 font-extrabold tracking-tight text-gray-900 text-center border-none p-0">{{ post.title }}</h1>
    <div v-html="post.body" class="prose mt-16 text-gray-600  p-6  w-full space-x-6"></div>
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
