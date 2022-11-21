<script>
import { store } from "../store";
import AppCategoryCard from "./AppCategoryCard.vue"

export default {
    name: "AppBrowseCategories",
    data() {
        return {
            store,
            categoriesOrder: [1, 5, 0, 4, 2, 3]
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
    height: 750px;
}

.ms_category-card {
    float: right;
    width: calc((100% / 3) - 30px);
    height: calc((100% / 3) - 30px);
    margin-bottom: 30px;
    margin-left: 30px;
}

.ms_category-card:first-child {
    float: left;
    width: calc(((100% / 3) * 2));
    height: calc(((100% / 3) * 2) - 30px);
    margin-bottom: 30px;
    margin-left: 0;
}

.ms_category-card:last-child {
    float: left;
    width: calc(((100% / 3)));
    height: calc(((100% / 3)) - 30px);
    margin-bottom: 30px;
    margin-left: 0;
}

.ms_category-card:nth-child(4) {
    // margin
}
</style>