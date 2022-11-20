<script>
import { store } from "../store";
import AppCategoryCard from "./AppCategoryCard.vue"

export default {
    name: "AppBrowseCategories",
    data() {
        return {
            store,
            categoriesOreder: [1, 5, 0, 4, 2, 3]
        }
    },
    components: {
        AppCategoryCard
    }
}
</script>

<template>
    <section class="browse-categories">
        <div class="container">
            <div class="browse-categories-content clearfix">
                <div v-for="(category, index) in store.macroCategories" class="ms_category-card">
                    <AppCategoryCard :categoryCardData="category" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.browse-categories-content {
    width: 100%;
    height: 500px;
}

.ms_category-card {
    float: right;
    width: calc((100% / 3) - 10px);
    height: calc((100% / 3) - 10px);
    margin-bottom: 10px;
    margin-left: 10px;

    // DEBUG
    background-color: brown;
}

.ms_category-card:first-child {
    float: left;
    width: calc(((100% / 3) * 2));
    height: calc(((100% / 3) * 2) - 10px);
    margin-bottom: 10px;
    margin-left: 0;

    // DEBUG
    background-color: blueviolet;
}

.ms_category-card:last-child {
    float: left;
    width: calc(((100% / 3)));
    height: calc(((100% / 3)) - 10px);
    margin-bottom: 10px;
    margin-left: 0;

    // DEBUG
    background-color: brown;
}

.ms_category-card:nth-child(4) {
    // margin
}
</style>