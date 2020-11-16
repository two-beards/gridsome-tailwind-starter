<template>
    <footer class="py-12 text center">
        <FooterLink :to="githubUrl" title="GitHub" />
    </footer>
</template>

<script>
import FooterLink from './FooterLink.vue'

export default {
    name: 'SiteFooter',
    components: {
        FooterLink,
    },
    data() {
        return {
            githubUrl:
                'https://github.com/mikemcbride/gridsome-tailwind-starter',
        }
    },
}
</script>
