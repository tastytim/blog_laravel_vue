<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="text search"
      class="rounded"
    />
  </div>
</template>

<script>
export default {
  props:['modelValue'],
  setup() {
    
  },
};
</script>

<style></style>
