<template>
    <div class="font-sans bg-white text-black flex flex-col min-h-screen">
        <SiteHeader />
        <main class="flex-1">
            <slot />
        </main>
        <SiteFooter />
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

export default {
    name: 'DefaultLayout',
    components: {
      SiteHeader,
      SiteFooter,
    },
}
</script>
