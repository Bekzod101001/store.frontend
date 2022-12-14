<template>
    <main class="home">
        <Hero></Hero>
        <Products></Products>
        <About></About>
        <Useful></Useful>
    </main>
</template>
  
<script>
export default {
    components: {
        About: () => import('@/components/home/about'),
        Hero: () => import('@/components/home/hero'),
        Products: () => import('@/components/home/products'),
        Useful: () => import('@/components/home/useful'),

    }
}
</script>
  