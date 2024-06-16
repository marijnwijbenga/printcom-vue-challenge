import { RouteRecordRaw } from 'vue-router'

export const ROUTES: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        path: '/products/poster',
        name: 'Poster',
        component: () => import('../pages/products/PosterProductPage.vue'),
    },
    {
        path: '/products/business-cards',
        name: 'BusinessCards',
        component: () => import('../pages/products/BusinessCardProductPage.vue'),
    },
    {
        path: '/products/business-cards',
        name: 'BusinessCards',
        component: () => import('../pages/products/BusinessCardProductPage.vue'),
    },
    {
        path: '/products/flyers',
        name: 'Flyers',
        component: () => import('../pages/products/FlyerProductPage.vue'),
    },
    // {
    //     path: '/products',
    //     name: 'Products',
    //     component: () => import('../pages/products.vue'),
    // },
]

export default ROUTES
