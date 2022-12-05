<template>
  <q-page class="flex flex-center">
    <p>Store: {{ count }}</p>
    <button @click="increment">+</button>
  </q-page>
</template>

<script setup>
import { defineComponent, computed } from "vue";
import { useCounterStore } from "stores/example-store";

const $store = useCounterStore();

const count = computed(() => $store.count);
const increment = () => $store.increment();

defineComponent({
  name: "IndexPage",
});
</script>
