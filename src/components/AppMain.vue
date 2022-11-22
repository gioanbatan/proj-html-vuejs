<script>
import AppCTA from "./AppCTA.vue";
import AppMerits from "./AppMerits.vue";
import AppBrowseCategories from "./AppBrowseCategories.vue";
import AppJumbotron from "./AppJumbotron.vue";
import AppRecentCourses from "./AppRecentCourses.vue";
import AppProud from "./AppProud.vue";
import AppSubscribeNewsletter from "./AppSubscribeNewsletter.vue";
import AppPopularCourses from "./AppPopularCourses.vue";
import AppBannersSection from "./AppBannersSection.vue";
import AppQuote from "./AppQuote.vue";

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
        AppPopularCourses,
        AppBannersSection,
        AppQuote
    }
}
</script>

<template>
    <main>
        <!-- CTA -->
        <AppCTA />
        <!-- /CTA -->

        <!-- Merits -->
        <AppMerits class="pb-5" />
        <!-- /Merits -->

        <!-- Browse categories -->
        <AppBrowseCategories class="my-5" />
        <!-- /Browse categories -->

        <!-- Jumbotron -->
        <AppJumbotron class="my-5" />
        <!-- /Jumbotron -->

        <!-- Browse Recent Coureses -->
        <AppRecentCourses class="py-5" />
        <!-- /Browse Recent Coureses -->

        <!-- Proud section -->
        <AppProud />
        <!-- /Proud section -->

        <!-- Subscrive Newsletter -->
        <AppSubscribeNewsletter />
        <!-- /Subscrive Newsletter -->

        <!-- Browse Popular Courses -->
        <AppPopularCourses class="py-5" />
        <!-- /Browse Popular Courses -->

        <!-- Banners section -->
        <AppBannersSection />
        <!-- /Banners section -->

        <!-- Quote -->
        <AppQuote />
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