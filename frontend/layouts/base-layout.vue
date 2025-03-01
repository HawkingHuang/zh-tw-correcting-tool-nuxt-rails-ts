<template>
  <div>
    <div class="w-[98%] p-1 mx-auto mt-1">
      <nav-header />
    </div>
    <div class="card">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 98%;
  padding: 1rem;
  margin: 2rem auto 0.8rem auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
