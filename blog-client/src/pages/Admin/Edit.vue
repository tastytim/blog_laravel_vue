<template>
  <div><textarea v-model="post.title"></textarea></div>
</template>

<script>
import { onMounted } from "vue";
import _ from 'lodash'
import useAdminPosts from "../../api/useAdminPosts";
export default {
  props: {
    slug: String,
  },
  setup(props) {
    const { post, fetchPost } = useAdminPosts();
    onMounted(async () => {
      await fetchPost(props.slug);

      watch(
        () => _cloneDeep(post),
        _debounce(() => {
          console.log("title changed");
        } ,500)
      );
    });

    return { post, fetchPost };
  },
};
</script>

<style></style>
