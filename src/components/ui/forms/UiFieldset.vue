<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <fieldset :name="name">
        <slot></slot>
    </fieldset>
</template>

<style scoped>
fieldset {
    display: flex;
    border-radius: 0.4rem;
    border: none;
    flex-direction: column;
    background-color: var(--peach-200);
    padding: 1.2rem 2rem 2.4rem 2rem;
    margin-bottom: 2rem;
}
</style>
