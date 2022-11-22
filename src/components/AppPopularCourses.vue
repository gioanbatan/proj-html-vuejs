<script>
import { store } from "../store";
import AppCourseCard from "./AppCourseCard.vue";

export default {
    name: "AppPopularCourses",
    components: {
        AppCourseCard
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <section class="popular-courses ">
        <div class="container-fluid">
            <div class="popular-courses-content py-5">
                <h2 class="py-4 text-center">Popular courses</h2>

                <p class="pb-5 text-center">Discover our most popular courses for sel learning</p>
                <div class="courses-cards">
                    <div class="row gy-5">
                        <div v-for="n in 6" class="col-6 col-sm-4 col-md-3 col-xl-2">
                            <AppCourseCard :course="store.courses[0]" />
                        </div>
                    </div>
                </div>

                <div class="mt-4 courses-slider-commands d-flex justify-content-center">
                    <button class="ms_btn-slider">
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button class="ms_btn-slider">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.popular-courses {
    background-color: $col-bg-jumbo;
}

.popular-courses-content {
    h2 {
        font-size: 3rem;
        font-weight: 300;
    }

    p {
        font-size: 1.25rem;
        font-weight: 300;
    }
}
</style>