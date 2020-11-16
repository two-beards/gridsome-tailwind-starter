<template>
    <nav class="flex items-center">
        <NavLink to="/" :active="$route.path === '/'" title="Home" />
        <NavLink to="/about" :active="$route.path.startsWith('/about')" title="About" />
    </nav>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
    name: 'SiteNav',
    components: {
      NavLink,
    },
}
</script>
