<template>
    <g-link class="relative inline-block px-4 py-1" :to="to">
        <span
            class="relative inline-block border-b-2"
            :class="{
                'text-black border-teal-500': active === true,
                'text-gray-700 border-transparent': active === false,
            }"
        >
            {{ title }}
        </span>
    </g-link>
</template>

<script>
export default {
    name: 'NavLink',
    props: {
        active: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    },
}
</script>
