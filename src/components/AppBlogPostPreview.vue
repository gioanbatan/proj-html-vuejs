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
    <a :href="store.blogPosts[n - 1].href" class="blog-card d-flex" v-for="n in postQty" :key="n">
        <div class="card-image">
            <img :src="getImagePath(`../assets/img/${store.blogPosts[n - 1].thumb}`)"
                :alt="store.blogPosts[n - 1].title">
        </div>

        <div class="card-text d-flex flex-column align-items-start justify-content-between">
            <h6>{{ store.blogPosts[n - 1].title }}</h6>
            <span>{{ store.blogPosts[n - 1].datePublished }}</span>
        </div>
    </a>
</template>    

<style lang="scss" scoped>
// @use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.blog-card {
    width: 100%;
    height: 6vw;
    padding-bottom: 1rem;
}

.card-image {
    width: 6vw;
    height: 100%;
    padding-right: 1rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.card-text {
    width: 70%;

}

h6 {
    color: $col-gray;
    font-size: 0.9rem;
}

span {
    font-size: 0.8rem;
    color: $col-light-gray;

    &:before {
        content: " \2015";
    }
}
</style>