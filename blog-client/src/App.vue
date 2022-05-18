
<template>
<div>
  <Navbar/>
  <div class="container mx-auto py-12">
    
    <router-view/>
  </div>
</div>

</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
    components: { Navbar }
}
</script>

<style>

</style>