<script setup lang="ts"></script>

<template>
  <header>
    <h1>Lineage Lens</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
}

#app {
  width: 100dvw;
  height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}
</style>
