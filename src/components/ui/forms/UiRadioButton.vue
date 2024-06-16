<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    id: string
    name: string
    value: string | number
    modelValue?: string | number | boolean
    required?: boolean
    disabled?: boolean
}>()

const emit = defineEmits(['update:modelValue', 'change'])

const checked = computed(() => props.modelValue === props.value)

const onChange = (event: Event) => {
    emit('update:modelValue', props.value)
    emit('change', event)
    console.log('Radio button selected value:', props.value)
}
</script>

<template>
    <input
        :id="id"
        type="radio"
        :name="name"
        :value="value"
        class="radio-button"
        :disabled="disabled"
        :required="required"
        :checked="checked"
        @change="onChange"
    />
</template>

<style scoped>
.radio-button {
    margin-right: 2rem;
}
</style>
