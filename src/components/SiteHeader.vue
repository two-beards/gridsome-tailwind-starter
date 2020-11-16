<template>
    <header class="flex flex-col lg:flex-row justify-center lg:justify-between items-center py-4 lg:py-6">
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
