<script>
import AppCTA from "./AppCTA.vue";
import AppMerits from "./AppMerits.vue";
import AppBrowseCategories from "./AppBrowseCategories.vue";
import AppJumbotron from "./AppJumbotron.vue";
import AppRecentCourses from "./AppRecentCourses.vue";
import AppProud from "./AppProud.vue";
import AppSubscribeNewsletter from "./AppSubscribeNewsletter.vue";
import AppPopularCourses from "./AppPopularCourses.vue";

export default {
    name: "AppMain",
    components: {
        AppCTA,
        AppMerits,
        AppBrowseCategories,
        AppJumbotron,
        AppRecentCourses,
        AppProud,
        AppSubscribeNewsletter,
        AppPopularCourses
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
        <AppJumbotron />
        <!-- /Jumbotron -->

        <!-- Browse Recent Coureses -->
        <AppRecentCourses />
        <!-- /Browse Recent Coureses -->

        <!-- Proud section -->
        <AppProud />
        <!-- /Proud section -->

        <!-- Subscrive Newsletter -->
        <AppSubscribeNewsletter />
        <!-- /Subscrive Newsletter -->

        <!-- Browse Popular Courses -->
        <AppPopularCourses />
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