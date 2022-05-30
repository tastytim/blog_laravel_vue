
<template>
<div class="container mx-auto px-12">
  <Navbar/>
  <div class="container mx-auto py-12">
    
    <router-view/>
  </div>
  <Footer/>
</div>

</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
    components: { Navbar , Footer }
}
</script>

<style>

</style>