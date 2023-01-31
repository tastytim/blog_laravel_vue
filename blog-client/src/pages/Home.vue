<template>
  <div>
    <div class="ml-1">
      <search-bar v-model="inputText" />
    </div>
    <div v-for="post in filteredList" :key="post.uuid" class="py-3">
      <router-link :to="{ name: 'post', params: { slug: post.slug } }">
        <h1 class="text-2xl font-extrabold">{{ post.title }}</h1>
        <h2 class="text-l">{{ post.teaser }}</h2>
      </router-link>
    </div>
    <div class="py-5 flex justify-center">
      <v-pagination
        v-model="page"
        :pages="pages"
        active-color="#DCEDFF"
        @update:modelValue="updateHandler"
      />
    </div>
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { onMounted, ref } from "vue";
import usePosts from "../api/usePosts";
import SearchBar from "../components/SearchBar.vue";
import Paginate from "../components/Paginate.vue";
export default {
  components: { SearchBar, Paginate, VPagination },
  setup() {
    let { posts, fetchPosts } = usePosts();
    let inputText = ref("");
    onMounted(fetchPosts);
    let page = ref(1);
    let start = ref(0);
    let end = ref(5);
    return { posts, inputText, page, start, end };
  },
  computed: {
    filteredList() {
      return [...this.posts].slice(this.start, this.end).filter((e) => {
        return e.title.toLowerCase().includes(this.inputText.toLowerCase());
      });
    },
    pages() {
      return Math.ceil(this.posts.length / 5);
    },
  },
  methods: {
    updateInputText(value) {
      this.inputtext = value;
    },
    updateHandler(e) {
      this.page = e;
      this.start = this.page * 5 - 5;
      this.end = this.page * 5;
    },
  },
};
</script>

<style></style>
