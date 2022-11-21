<script>
import AppBanner from "./AppBanner.vue";

export default {
    name: "AppBannersSection",
    components: {
        AppBanner
    }
}
</script>

<template>
    <section class="banners">
        <div class="container">
            <div class="banners-content">
                <div class="row g-4 my-5">
                    <div class="col">
                        <AppBanner class="single-banner" :title="'Become an Instructor'"
                            :image="'../assets/img/image_box_1-221x231.png'"
                            :text="'Teach what you love. Masterstudy gives you the tools to create a course.'"
                            :textButton="'start teaching'" />
                    </div>
                    <div class="col">
                        <AppBanner class="single-banner" :title="'Setup For Business'"
                            :image="'../assets/img/image_box_2-234x231.png'"
                            :text="`Get unlimited access to 2.500 of Udemy's top courses for your team`"
                            :textButton="'doing business'" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.banners-content {
    width: 100%;
}

.single-banner {
    // height: 300px;
    border: 1px solid $col-light-gray;
}
</style>