<template>
    <div class="font-sans bg-white text-black flex flex-col min-h-screen px-4 lg:px-8 w-full max-w-3xl mx-auto">
        <SiteHeader />
        <main class="flex-1 mt-12">
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
