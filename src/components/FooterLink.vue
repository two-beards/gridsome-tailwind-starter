<template>
    <a :href="to" class="text-gray-700 hover:text-gray-900 lg:text-lg inline-block mx-2">
        {{ title }}
    </a>
</template>

<script>
export default {
    name: 'FooterLink',
    props: {
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
