<script>
import { store } from "../store";
import AppStatsTable from "./AppStatsTable.vue";

export default {
    name: "AppProud",
    data() {
        return {
            store
        }
    },
    components: {
        AppStatsTable
    }
}
</script>

<template>
    <section class="we-are-proud">
        <div class="container">
            <div class="we-are-proud-content text-center">
                <h2 class="pb-2">We are Proud</h2>

                <p class="pb-2">Certificate courses are instructed by highly educated and qualified instructors who hold
                    doctoral and
                    masters's level degrees.</p>

                <div class="stats d-flex">
                    <div class="single-stat">
                        <AppStatsTable class="d-flex flex-column align-items-center" :statNumber="[3, 3, 5, 2, 5, 2, 4]"
                            :statType="'students'" />
                    </div>

                    <div class="single-stat">
                        <AppStatsTable class="d-flex flex-column align-items-center"
                            :statNumber="[12, 3, 5, 67, 2, 3, 5, 2]" :statType="'courses'" />
                    </div>

                    <div class="single-stat">
                        <AppStatsTable class="d-flex flex-column align-items-center" :statNumber="[131, 211, 2]"
                            :statType="'hours video'" />
                    </div>

                    <div class="single-stat">
                        <AppStatsTable class="d-flex flex-column align-items-center" :statNumber="[1, 5, 0]"
                            :statType="'countries reached'" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.we-are-proud {
    background-color: $col-bg-jumbo;
    background-image: url("../assets/img/we_proud.png");
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
}

.we-are-proud-content {
    padding-top: 5rem;
    width: 100%;
    height: 500px;
}

.stats {
    width: 100%;

    .single-stat {
        width: calc(100% / 4);
        border-left: 1px solid $col-light-gray;
        border-right: 1px solid $col-light-gray;
    }
}
</style>