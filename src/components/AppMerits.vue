<script>
import AppMeritCard from "./AppMeritCard.vue";

export default {
    name: "AppMerits",
    components: {
        AppMeritCard
    }
}
</script>

<template>
    <section class="merits">
        <div class="container">
            <div class="row gx-4">
                <div class="col">
                    <AppMeritCard :icon="'fa-solid fa-earth-americas'" :title="'Worlwide Recognize'"
                        :text="'Our online courses certificates can be used around th world and also in most popular universiuties and companies.'" />
                </div>
                <div class="col">
                    <AppMeritCard :icon="'fa-solid fa-display'" :title="'Mostly Online Learning (sd)'"
                        :text="'Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a year to complete.'" />
                </div>
                <div class="col">
                    <AppMeritCard :icon="'fa-regular fa-calendar-check'" :title="'Graduate in as little as 1 Year'"
                        :text="'Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy'" />
                </div>
            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.row {
    min-height: 230px;
}
</style>