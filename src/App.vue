<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"
import AppMain from "./components/AppMain.vue"

export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    data() {
        return {
            store
        }
    },
    methods: {
    }
}
</script>

<template>
    <!-- Header -->
    <AppHeader />
    <!-- /Header -->

    <!-- Main -->
    <AppMain />
    <!-- /Main -->

    <!-- Footer -->
    <AppFooter />
    <!-- /Footer -->
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/variables" as *;
</style>