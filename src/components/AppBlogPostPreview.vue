<script>
import { store } from "../store";

export default {
    name: "AppBlogPostPreview",
    data() {
        return {
            store
        }
    },
    props: {
        postQty: Number,
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div v-for="n in postQty" :key="n" class="ms_card d-flex">
        <div class="card-image">
            <img :src="getImagePath(`../assets/img/${store.blogPosts[n - 1].thumb}`)"
                :alt="store.blogPosts[n - 1].title">
        </div>

        <div class="card-text">
            <h6>{{ store.blogPosts[n - 1].title }}</h6>
            <span>{{ store.blogPosts[n - 1].datePublished }}</span>
        </div>
    </div>
</template>    

<style lang="scss" scoped>
// @use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.card-image {
    width: 30%;

    img {
        width: 100%;
    }
}

.card-text {
    width: 70%;
}

h6 {
    color: $col-gray;
}

span {
    color: $col-light-gray;

    &:before {
        content: " \2015";
    }
}
</style>