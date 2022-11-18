<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"

export default {
    components: {
        AppHeader,
        AppMain
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
    <AppMain />


    <!-- /Header -->

    <!-- Main -->
    <!-- CTA -->
    <!-- /CTA -->

    <!-- Merits -->
    <!-- /Merits -->

    <!-- Browse categories -->
    <!-- /Browse categories -->

    <!-- Jumbotron -->
    <!-- /Jumbotron -->

    <!-- Browse Recent Coureses -->
    <!-- /Browse Recent Coureses -->

    <!-- Proud section -->
    <!-- /Proud section -->

    <!-- Subscrive Newsletter -->
    <!-- /Subscrive Newsletter -->

    <!-- Browse Popular Courses -->
    <!-- /Browse Popular Courses -->

    <!-- Banners section -->
    <!-- /Banners section -->

    <!-- Quote -->
    <!-- /Quote -->
    <!-- /Main -->

    <!-- Footer -->
    <!-- /Footer -->
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>