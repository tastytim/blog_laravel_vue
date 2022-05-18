<template>
  <div class="w-full " >

    <h1 class="my-6 w-full text-4xl  lg:text-6xl leading-10 font-extrabold tracking-tight text-gray-900 text-center border-none p-0">{{ post.title }}</h1>
    <div v-html="post.body" class="prose grid justify-content-center mx-auto  my-0 mt-16 text-gray-600   w-max "></div>
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

<style>
</style>
