<script>
export default {
    name: "AppBanner",
    props: {
        image: String,
        title: String,
        text: String,
        textButton: String
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="banner py-5 px-3 d-flex align-items-center">
        <div class="banner-image d-flex align-items-center pe-1">
            <img :src="getImagePath(image)" :alt="title">
        </div>

        <div class="banner-text d-flex flex-column justify-content-center align-items-start">
            <h2>{{ title }}</h2>
            <p>{{ text }}</p>
            <button class="ms_std-btn">{{ textButton }}</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.banner {
    width: 100%;
    height: 100%;

    .banner-image {
        width: 50%;
        height: 100%;
    }

    .banner-text {
        width: 40%;
        height: 100%;
    }

}
</style>

