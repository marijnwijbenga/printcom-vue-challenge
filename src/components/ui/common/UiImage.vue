<script setup lang="ts">
defineProps<{
    image: string
    alt: string
    width?: string
    height?: string
}>()
</script>

<template>
    <img :src="image" :alt="alt" :width="width" :height="height" />
</template>

<style scoped></style>
