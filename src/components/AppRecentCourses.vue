<script>
import { store } from "../store";
import AppStdNavMenu from "./AppStdNavMenu.vue";

export default {
    name: "AppRecentCourses",
    components: {
        AppStdNavMenu,
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
        <div class="container">
            <div class="recent-courses-content">
                <h2 class="text-center">Recent Courses</h2>

                <AppStdNavMenu class="d-flex justify-content-center" :menuItems="store.macroCategories" />

                <div class="courses-cards">
                    <div class="row row-cols-6">
                        <div v-for="n in 12" class="col">
                            CARD {{ n }}
                        </div>
                    </div>
                </div>

                <div class="show-all d-flex justify-content-center">
                    <button class="btn btn-primary">SHOW ALL</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>