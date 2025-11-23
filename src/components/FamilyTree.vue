<template>
  <div class="f3" id="FamilyChart"></div>
</template>

<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import f3 from 'family-chart'
import 'family-chart/styles/family-chart.css'
import type { Person } from '@/types/Person'

const { people } = defineProps<{
  people: Person[]
}>()

onMounted(() => {
  watchEffect(() => {
    const data = people.map((person) => ({
      id: String(person.id),
      data: {
        'first name': person.first_name,
        'last name': person.last_name,
        birthday: person.birthday,
        gender: person.gender,
      },
      rels: {
        parents: [String(person.father_id), String(person.mother_id)],
        spouses: Array.from(
          new Set(
            person.relationships
              .flatMap((relationship) => relationship.people_ids)
              .filter((p) => p !== person.id)
              .map((p) => String(p)),
          ),
        ),
        children: person.children_ids.map((id) => String(id)),
      },
    }))

    const f3Chart = f3.createChart('#FamilyChart', data).setTransitionTime(1000)

    f3Chart.setCardHtml().setCardDisplay([['first name', 'last name'], ['birthday']])

    f3Chart.updateTree({ initial: true })
  })
})
</script>

<style scoped>
#FamilyChart {
  width: 100%;
  height: 100%;
  background-color: rgb(33, 33, 33);
  color: #fff;
}
</style>
