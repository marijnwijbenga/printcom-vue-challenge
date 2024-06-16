<script setup lang="ts">
defineProps<{
    forInput: string
}>()
</script>

<template>
    <label :for="forInput">
        <slot></slot>
    </label>
</template>

<style scoped>
label {
    flex: 1;
    cursor: inherit;
    padding: 0.4rem 0;
    font-size: var(--label-text-01__size);
    font-weight: var(--label-text-01__weight);
}
</style>
