<script setup lang="ts">
import { ProductInterface } from '../../interfaces/product/product.interface'
import { usePosterProductMapper } from '../../composables/mappers/poster-product.mapper'
import { onBeforeMount, ref } from 'vue'
import PosterProductSelector from '../../components/composites/products/posters/PosterProductSelector.vue'

// TODO set simple initial/loading states with pinia (also fix in template)

const { mapPosterProduct } = usePosterProductMapper()
const poster = ref<ProductInterface | null>(null)
const errors = ref<string>('')

const loadPosterData = async () => {
    try {
        const POSTER = await import('../../CONSTANTS/POSTERS.json')
        // TODO set simple state (also fix in template)
        poster.value = mapPosterProduct(POSTER.default)
        console.log(poster)
        // throw new Error('fake error simulator 2000')
    } catch (error: any) {
        // TODO set simple state (also fix in template)
        errors.value = error.message
        console.error('Failed to load poster data:', errors.value)
    }
}

onBeforeMount(loadPosterData)
</script>

<template>
    <div v-if="poster && !errors">
        <PosterProductSelector :product="poster">
            <p>
                Ladies and gentlemen! This is YUGE! I’m talking about the most incredible, the most fantastic posters
                you have ever seen. These posters are so good, so unbelievable, you’re going to wonder how you ever
                lived without them. Trust me, nobody knows posters better than me. I’ve seen all the posters, and these?
                These are the best. Absolutely the best. Let me tell you, folks, these posters are made from the finest
                materials – the best paper, the best ink.
            </p>
            <p>
                I went to the top paper scientists, the top inkologists, and they told me, “These posters are a
                revolution. A revolution in wall decor.” And they were right! You put one of these posters on your wall,
                and BOOM – instant class, instant style. It’s like magic.
            </p>
            <p>
                And the designs, oh boy, the designs are out of this world. We’ve got everything. Pictures of beautiful
                places – places you’ve never heard of but should have. We’ve got cats doing funny things, because who
                doesn’t love cats, right? We’ve got the most inspirational quotes. I’ve seen quotes from Lincoln,
                Churchill, and of course, me. That’s right, some of the best quotes are mine. Everyone says so.
            </p>
            <p>
                Here’s the deal, folks. It’s a deal so good, you’re not going to believe it. Buy one poster, and we’ll
                give you a second one for half the price. That’s like getting one and a half posters for the price of
                one! Amazing, right? But wait, there’s more. Buy three posters, and we’ll throw in a fourth one
                absolutely FREE. Free, folks! It’s tremendous. You can’t get a better deal anywhere else.
            </p>
            <p>
                And these posters are versatile. You can put them anywhere. On your walls, on your ceilings, in your
                car, on your pets – yes, on your pets! Dogs love them, cats love them, everybody loves them. You can
                even use them as a blanket. They’re that good. And they smell great! You can’t say that about most
                posters, but these? They smell fantastic.
            </p>
            <p>
                Don’t wait. Don’t be a loser. These posters are going fast. Faster than you can say “tremendous.” You
                need these posters. Your walls need these posters. Your life needs these posters. Make the smart choice,
                the best choice, and order your posters today. You’re going to love them, I guarantee it. They’re YUGE!
            </p>
        </PosterProductSelector>
    </div>
    <div v-else-if="!poster && !errors">loading...</div>
    <div v-if="errors">{{ errors }}</div>
</template>

<style scoped></style>
