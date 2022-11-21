<script>
export default {
    name: "AppPopularCourses",
}

</script>

<template>
    <section class="popular-courses">
        <div class="container">
            <div class="popular-courses-content py-3">
                <h2 class="text-center">Popular Courses</h2>

                <div class="courses-cards">
                    <div class="row row-cols-6">
                        <div v-for="n in 6" class="col">
                            CARD {{ n }}
                        </div>
                    </div>
                </div>

                <div class="courses-slide-commands d-flex justify-content-center">
                    <button class="btn btn-primary">back</button>
                    <button class="btn btn-primary">forward</button>
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
    // DEBUG
    height: 400px;
}
</style>