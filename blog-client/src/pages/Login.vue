<template>
  <div>
    <div class="max-w-md mx-auto w-full">
      <form class="mt-8 space-y-6" v-on:submit.prevent="attemptLogin">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="email"
                id="email"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
                v-model="form.email"
              />
              <p class="mt-2 text-sm text-red-600" v-if="errors.email">{{errors.email[0]}}</p>
            </div>
          </div>
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="mt-1">
              <input
              v-model="form.password"
                type="password"
                name="password"
                id="password"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
              <p class="mt-2 text-sm text-red-600" v-if="errors.password">{{errors.password[0]}}</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive , ref } from "vue";
import {useRouter} from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const form = reactive({
      email: "",
      password: "",
    });
    const errors = ref({})

    const store = useStore();
    const attemptLogin = () => {
      store.dispatch("login", form).then(()=> {
        
          router.replace({name:'admin.posts'})

      }).catch((e)=>{
          
          console.log(e)
          if(e.response.status == 422){
              errors.value = e
          }
      });
    };

    return { attemptLogin, form , errors };
  },
};
</script>

<style></style>
