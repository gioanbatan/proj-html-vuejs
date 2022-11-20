<script>
export default {
    name: "AppCategoryCard",
    props: {
        categoryCardData: Object,
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="ms_category-card-content d-flex justify-content-between flex-column">
        <img :src="getImagePath(`../assets/img/${categoryCardData.thumb}`)" :alt="`${categoryCardData.name}`">
        <div class="ms_category-card-text d-flex justify-content-between">
            <span>{{ categoryCardData.name }}</span>
            <span>Courses</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_category-card-content {
    width: 100%;
    height: 100%;

    img {
        height: calc(100% - 1.5rem);
        object-fit: cover;
    }
}
</style>