<template>
  <div>
    <FamilyTree :people="people" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { Person } from '@/types/Person'
import FamilyTree from './FamilyTree.vue'
import { authStore } from '@/stores/auth.ts'

const people = ref<Person[]>([])

function fetchPeople(token: string) {
  fetch(`${import.meta.env.VITE_API_URL}/person`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((p: Person[]) => {
      people.value = p
    })
}

onMounted(() => {
  if (authStore.token) {
    fetchPeople(authStore.token);
  } else {
    const stop = watch(
      () => authStore.token,
      (token) => {
        if (token) {
          fetchPeople(token);
          stop();
        }
      }
    );
  }
})
</script>

<style scoped>
div {
  height: 100%;
}
</style>
