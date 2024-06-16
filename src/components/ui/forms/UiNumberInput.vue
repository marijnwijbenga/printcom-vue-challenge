<script setup lang="ts">
defineProps<{
    name: string
    id: string
    min: number
    max: number
    placeholder: string
}>()
</script>

<template>
    <input :id="id" type="number" :name="name" :min="min" :max="max" class="number-input" :placeholder="placeholder" />
</template>

<style scoped>
.number-input {
    border: 0.1rem solid var(--peach-500);
    border-radius: 0.3rem;
    min-width: 9rem;
    padding: 0.3rem 0.8rem;
}

.number-input:focus,
.number-input:focus-visible {
    border: 0.1rem solid var(--pink-600);
    outline-color: var(--pink-600);
}

.number-input::placeholder {
    color: var(--grey-400);
}
</style>
