<template>
    <header class="flex flex-col lg:flex-row justify-center lg:justify-between items-center p-4 lg:py-6 lg:px-8">
        <g-link to="/" class="font-bold text-2xl">{{ $static.metadata.siteName }}</g-link>
        <SiteNav />
    </header>
</template>

<script>
import SiteNav from './SiteNav.vue'

export default {
    name: 'SiteHeader',
    components: {
      SiteNav,
    },
}
</script>
