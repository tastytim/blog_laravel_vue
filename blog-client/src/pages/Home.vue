<template>
  <div>
    <div>
      <search-bar v-model='inputText'/>
    </div>
    <div v-for="post in filteredList" :key="post.uuid">
      <router-link :to="{ name: 'post', params: { slug: post.slug } }">
        <h1 class="text-2xl font-extrabold">{{ post.title }}</h1>
        <h2 class="text-l">{{ post.teaser }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import usePosts from "../api/usePosts";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: { SearchBar },
  setup() {
    let { posts, fetchPosts } = usePosts();
    let inputText = ref("");
    onMounted(fetchPosts);
    return { posts, inputText };
  },
  computed: {
    filteredList() {
      return this.posts.filter((e) => {
        return e.title.toLowerCase().includes(this.inputText.toLowerCase());
      });
    },
  },
  methods: {
    updateInputText(value) {
      this.inputtext = value;
      console.log(this.inputtext);
    },
  },
};
</script>

<style></style>
