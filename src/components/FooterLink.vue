<template>
    <a :href="to" class="text-blue-500 hover:underline lg:text-lg inline-block mx-2">
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
