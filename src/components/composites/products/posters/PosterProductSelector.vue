<script setup lang="ts">
import ProductSelector from '../ProductSelector.vue'
import UiNumberInput from '../../../ui/forms/UiNumberInput.vue'
import UiLegend from '../../../ui/forms/UiLegend.vue'
import UiForm from '../../../ui/forms/UiForm.vue'
import UiRadioButton from '../../../ui/forms/UiRadioButton.vue'
import UiFieldset from '../../../ui/forms/UiFieldset.vue'
import UiLabel from '../../../ui/forms/UiLabel.vue'
import { ProductInterface } from '../../../../interfaces/product/product.interface.ts'
import UiButton from '../../../ui/core/UiButton.vue'
import { onBeforeMount, ref } from 'vue'

const props = defineProps<{
    product: ProductInterface
}>()

const formData = ref<{ [key: string]: string }>({})

const createFormFields = () => {
    props.product.properties.forEach((property) => {
        formData.value[property.slug] = ''
    })
}

const handleSubmit = () => {
    console.log('log all form values here')
    console.log(formData.value)
}

onBeforeMount(createFormFields)
</script>

<template>
    <ProductSelector product-image="poster.jpg" title="Posters">
        <template #description>
            <slot></slot>
        </template>
        <template #form>
            <UiForm @submit="handleSubmit">
                <template v-for="property in product.properties" :key="property.title">
                    <UiFieldset :name="property.slug">
                        <UiLegend>{{ property.title }}</UiLegend>
                        <template v-for="option in property.options" :key="option.name">
                            <div
                                v-if="property.type === 'radio' && option.name"
                                class="poster-selector-radio radio-hover"
                            >
                                <UiRadioButton
                                    :id="property.slug + '__' + option.slug"
                                    v-model="formData[property.slug]"
                                    :name="property.slug"
                                    :value="option.slug"
                                />
                                <UiLabel :for-input="property.slug + '__' + option.slug">{{ option.name }}</UiLabel>
                            </div>
                            <div v-if="property.type === 'radio' && option.customSizes">
                                <div class="poster-selector-radio radio-hover">
                                    <UiRadioButton
                                        id="custom-size"
                                        v-model="formData[property.slug]"
                                        :name="property.slug"
                                        value="custom_size"
                                    />
                                    <UiLabel for-input="custom-size">Custom size</UiLabel>
                                </div>

                                <div class="poster-selector__custom">
                                    <UiLegend>Custom Size</UiLegend>
                                    <div class="poster-selector__custom-inputs">
                                        <div class="poster-selector-custom-input">
                                            <UiLabel for-input="custom-size-width">Width</UiLabel>
                                            <UiNumberInput
                                                id="custom-size-width"
                                                v-model="formData[property.slug]"
                                                :name="option.slug"
                                                :max="option.customSizes.maxWidth"
                                                :min="option.customSizes.minWidth"
                                                placeholder="width in mm"
                                            ></UiNumberInput>
                                        </div>
                                        <div class="poster-selector-custom-input">
                                            <UiLabel for-input="custom-size-height">Height</UiLabel>
                                            <UiNumberInput
                                                id="custom-size-height"
                                                v-model="formData[property.slug]"
                                                :name="option.slug"
                                                :max="option.customSizes.maxHeight"
                                                :min="option.customSizes.minHeight"
                                                placeholder="height in mm"
                                            ></UiNumberInput>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </UiFieldset>
                </template>
            </UiForm>
        </template>
        <template #button>
            <UiButton type="submit" @click="handleSubmit()">Add to cart</UiButton>
        </template>
    </ProductSelector>
</template>

<style scoped>
.poster-selector-radio {
    display: flex;
    cursor: pointer;
    border-radius: 0.4rem;
    padding-left: 0.4rem;
}

.poster-selector__custom {
    flex-direction: column;
    gap: 1rem;
    display: flex;
    padding: 1rem 0;
}

.poster-selector__custom-inputs {
    display: flex;
    gap: 2rem;
}

.poster-selector-custom-input {
    display: inline-flex;
    gap: 0.5rem;
}
</style>
