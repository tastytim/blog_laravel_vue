<template>
<div class="container">
    <div class="space-y-16 ">
    <button 
    v-on:click="newPost"
    type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        New post
    </button>

    <!-- Each post -->
    <div v-for="post in posts" :key="post.uuid">
        <div class="flex items-baseline sm:justify-between flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6 space-y-3 sm:space-y-0">
            <p class="text-xl font-bold tracking-tight text-gray-900">
                {{post.title}}
            </p>
            <div class="flex items-center space-x-6">
                <p class="text-base text-gray-500">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                     :class="{ 'bg-green-100 text-green-800' : post.published == 1 , 'bg-red-100 text-red-800' : post.published == 0  }">
                        {{post.published = 1 ? 'Published' : 'Unpublished'}}
                    </span>

                    
                </p>
                <div>
                    <router-link :to="{name:'admin.posts.edit', params:{uuid : post.uuid}}" class="text-sm font-medium">Edit</router-link>
                </div>
                <div>
                    <button class="text-sm font-medium" v-on:click="deletePost(post.uuid)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</div>
  
</div>
</template>

<script>
import {onMounted} from 'vue'
import useAdminPosts from '../../api/useAdminPosts'
import {useRouter}from 'vue-router'
export default {
    setup(){
        const {posts, fetchPosts ,createPost, destroyPost} = useAdminPosts(); 


        const router = useRouter();

       
        onMounted(fetchPosts())

        
       const deletePost = async(uuid)=>{
           if(!window.confirm('You sure?')){
               return 
           }
           await destroyPost(uuid);
           posts.value = posts.value.filter(p=>p.uuid !== uuid);
       }

        const newPost = async ()=>{
           let post =  await createPost()
           router.push({name:'admin.posts.edit' , params:{ uuid: post.uuid}})
        }
        
        return {posts , newPost , deletePost}
    }
}
</script>

<style>

</style>