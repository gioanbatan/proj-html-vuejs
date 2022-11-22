<script>
import { store } from "../store";
import AppStdNavMenu from "./AppStdNavMenu.vue";
import AppCourseCard from "./AppCourseCard.vue";

export default {
    name: "AppRecentCourses",
    components: {
        AppStdNavMenu,
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
    <section class="recent-courses">
        <div class="container-fluid">
            <div class="recent-courses-content">
                <h2 class="pb-5 text-center">Recent Courses</h2>

                <AppStdNavMenu class="pb-5 d-flex justify-content-center" :menuItems="store.macroCategories" />

                <div class="courses-cards">
                    <div class="row gy-5">
                        <div v-for="n in 12" class="col-6 col-sm-4 col-md-3 col-xl-2">
                            <AppCourseCard :course="store.courses[0]" />
                        </div>

                        <div class="show-all d-flex justify-content-center">
                            <button class="ms_std-btn">SHOW ALL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.recent-courses-content {
    h2 {
        font-size: 2.8rem;
        font-weight: 300;
    }

}
</style>