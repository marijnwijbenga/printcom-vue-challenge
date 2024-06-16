<script setup lang="ts">
withDefaults(
    defineProps<{
        type: 'submit' | 'button' | 'reset'
    }>(),
    {
        type: 'button',
    },
)
</script>

<template>
    <button :type="type"><slot></slot></button>
</template>

<style scoped></style>
