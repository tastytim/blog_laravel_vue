<!-- <template>
  <div>
    <div class="max-w-md mx-auto w-full">
      {{ errors }}
      <div class="text-center text-3xl"><h1>Registrer</h1></div>

      <form class="mt-8 space-y-6" v-on:submit.prevent="attemptRegister">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Name</label
            >
            <div class="mt-1">
              <input
                v-model="form.name"
                type="text"
                name="name"
                id="name"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
              <p class="mt-2 text-sm text-red-600" v-if="errors.name">
                {{ errors.name[0] }}
              </p>
            </div>
          </div>
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
                v-model="form.email"
              />
              <p class="mt-2 text-sm text-red-600" v-if="errors.email">
                {{ errors.email[0] }}
              </p>
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
              <p class="mt-2 text-sm text-red-600" v-if="errors.password">
                {{ errors.password[0] }}
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="text-2xl group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive, ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const router = useRouter();
    const form = reactive({
      email: "",
      password: "",
      name: "",
    });
    const errors = ref({});

    const attemptRegister = async () => {
      await axios.get("/sanctum/csrf-cookie");
      return await axios
        .post("/register", form)
        .then((e) => {
          if(e.status == 200){
              router.push({ path: '/admin/posts' })
          }
        })
        .catch((e) => {
            if(e.response.data.errors){
                 errors.value = e.response.data.errors
            }
         
        });
    };
    return { attemptRegister, form, errors };
  },
};
</script>

<style></style> -->
