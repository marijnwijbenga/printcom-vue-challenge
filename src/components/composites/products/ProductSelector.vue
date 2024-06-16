<script setup lang="ts">
import UiImage from '../../ui/common/UiImage.vue'

defineProps<{
    title: string
    productImage: string
}>()
</script>

<template>
    <div class="product-selector">
        <div class="product-selector-info">
            <h2 class="product-selector__title">
                {{ title }}
            </h2>
            <div class="product-selector__image">
                <UiImage
                    :image="'/assets/images/products/' + productImage"
                    alt="product image"
                    width="95%"
                    class="product-selector__image-image"
                ></UiImage>
            </div>

            <div class="product-selector__description">
                <slot name="description"></slot>
            </div>
        </div>

        <div class="product-selector__form">
            <slot name="form"></slot>
            <div class="product-selector__submit-button">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-selector {
    display: flex;
    flex-direction: row;
    padding: 2rem;
    gap: 2rem;
}

.product-selector-info {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.product-selector__form {
    width: 50%;
}

.product-selector__title {
    color: var(--pink-600);
    font-weight: 700;
    font-size: 2.8rem;
}

.product-selector__image {
}

.product-selector__description {
    max-width: 80ch;
    font-size: 1.1rem;
}

.product-selector__submit-button {
}

.product-selector__image-image {
    border-radius: 0.4rem;
}
</style>
