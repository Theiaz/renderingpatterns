<template>
  <button @click="add()">Count {{ count }}</button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    const add = () => (count.value = count.value + 1);

    return {
      count,
      add,
    };
  },
};
</script>

<style>
button {
  margin: 1em 0;
}
</style>
