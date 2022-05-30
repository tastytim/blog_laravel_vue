<template>
<div>
    <div class="flex p-4">
    <router-link class="mr-2 text-xl extrabold" :to="{ name: 'home' }"><img src="./../assets/logo.jpg" alt="" class="w-20"></router-link>
    <div class="flex" v-if="name.user" >
      <router-link class="mr-2" :to="{ name: 'admin.posts' }"
        >Dashboard</router-link
      >
      <div class="mr-2">
       
      </div>
      <div class="mr-2 cursor-pointer" v-on:click="logout">Logout</div>
    </div>

    <!-- <router-link class="mr-2" :to="{ name: 'admin.register' }">Register</router-link> -->
  </div>
  <div class="text-2xl font-extrabold justify-center flex">
      <div>PAVLENKO TIMUR BLOG</div>

  </div>
  
</div>
  
  
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted } from '@vue/runtime-core';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    let name = null;
    onMounted(
        name = store.getters
    )
    
    
    const logout = () => {
      store
        .dispatch("logout")
        .then(() => {
          router.replace({ name: "home" });
        })
        .catch((e) => {
          console.log(e);
        });
    };
    return { logout, name };
  },
};
</script>

<style></style>
