<script>
import AppCTA from "./AppCTA.vue";
import AppMerits from "./AppMerits.vue";
import AppBrowseCategories from "./AppBrowseCategories.vue";

export default {
    name: "AppMain",
    components: {
        AppCTA,
        AppMerits,
        AppBrowseCategories
    }
}
</script>

<template>
    <main>
        <!-- CTA -->
        <AppCTA />
        <!-- /CTA -->

        <!-- Merits -->
        <AppMerits />
        <!-- /Merits -->

        <!-- Browse categories -->
        <AppBrowseCategories />
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
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

main {
    padding-top: $header-height;
}
</style>