<script>
export default {
    name: "AppStdIconLinks",
    props: {
        icons: Object,
    }
}
</script>

<template>
    <ul class="d-flex">
        <li v-for="(icon, index) in icons" :key="index" class="p-1">
            <a :href="icon.link">
                <i :class="icon.icon"></i>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>