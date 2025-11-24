<template>
  <div>
    <FamilyTree :people="people" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Person } from '@/types/Person'
import FamilyTree from './FamilyTree.vue'
import auth from '../auth.ts'

const people = ref<Person[]>([])

onMounted(() => {
  fetch(`${import.meta.env.VITE_API_URL}/person`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(auth.accessTokenLocalStorageKey)}`,
    },
  })
    .then((res) => res.json())
    .then((p: Person[]) => {
      people.value = p
    })
})
</script>

<style scoped>
div {
  height: 100%;
}
</style>
