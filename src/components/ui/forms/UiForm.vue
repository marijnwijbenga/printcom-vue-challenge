<script setup lang="ts">
const emit = defineEmits(['submit'])
const handleSubmit = (event: Event) => {
    emit('submit', event)
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <slot></slot>
    </form>
</template>

<style scoped></style>
