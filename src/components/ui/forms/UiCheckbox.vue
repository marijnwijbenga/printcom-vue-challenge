<script setup lang="ts">
defineProps<{
    id: string
    name: string
}>()
</script>

<template>
    <input :id="id" type="checkbox" :name="name" />
</template>

<style scoped></style>
