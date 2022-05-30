<template>
  <div v-if="post.uuid">

  <div>Slug :</div>
    <div
      class=" w-full flex justify-between items-center  "
    >
    
      <div class="flex-grow items-center flex bg-gray-100">
        <span class="mr-1">/</span
        ><input
          type="text"
          class="p-0 border-none focus:ring-0 w-full bg-gray-100"
          v-model="post.slug"
          spellcheck="false"
          v-on:click="$event.target.select()"
        />
      </div>
      <div class="flex items-center space-x-6">
        <div>
          <span class="text-sm text-gray-900">{{lastSaved.fromNow()}}</span>
        </div>
        <div>
          <button v-on:click="post.published == 1 ? post.published = 0 : post.published = 1" class="text-sm font-medium" v-bind:class="{ 'bg-green-100 text-green-800' : post.published == 1, 'bg-red-100 text-red-800' : post.published == 0 }">
          {{post.published == 1 ? 'Published' : 'Unpublished'}}</button>
        </div>
        <router-link
          :to="{ name: 'post', params: { slug: post.slug } }"
          class="text-sm font-medium text-gray-800"
        >
          Preview
        </router-link>
      </div>
    </div>
    <div>Title :</div>
    <ResizeTextarea  >
      <template v-slot:default="{ resize, el }">
        <textarea
          :ref="el"
          v-on:input="resize"
          rows="1"
          v-model="post.title"
          class="  w-full bg-gray-200 text-4xl lg:text-6xl leading-10 font-extrabold tracking-tight text-gray-900 text-center border-none focus:ring-0 resize-none p-0"
        ></textarea>
      </template>
    </ResizeTextarea>
    <div>Text :</div>
    <Editor v-model:modelValue="post.body" v-model:teaserValue="post.teaser" />
  </div>
</template>

<script>
import { onMounted, watch , watchEffect, ref} from "vue";
import _ from "lodash";
import useAdminPosts from "../../api/useAdminPosts";
import ResizeTextarea from "../../components/ResizeTextarea.vue";
import slugify from 'slugify'
import Editor from '../../components/Editor.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);
export default {
  props: {
    uuid: String,
  },
  setup(props) {
    const { post, fetchPost, patchPost } = useAdminPosts();
    const lastSaved =ref(dayjs())
    const updatePost = async () => {
      if(post.value.title){
        await patchPost(props.uuid);
      }

      lastSaved.value = dayjs()
      
    };
    const replaceSlug = ()=>{
       const slug = post.value.slug

       if(slug.charAt(slug.length - 1) == ' '){
         return
       }
       post.value.slug = slug? slugify(slug, {strict:true}) : post.value.id
    }
    onMounted(async () => {

      await fetchPost(props.uuid);

      watchEffect(()=>{
        replaceSlug()
      })

      watch(
        () => _.cloneDeep(post),
        _.debounce(() => {
          updatePost();
        }, 500)
      );
    });
    return { post, lastSaved };
  },
  components: { ResizeTextarea, Editor },
};
</script>

<style  >

</style>
