<script>
export default {
    name: "AppStatsTable",
    props: {
        statNumber: Array,
        statType: String
    }
}
</script>

<template>
    <div class="sigleStatistic">
        <span class="stat-number">
            {{ statNumber.length }}
        </span>

        <span class="stat-type">
            {{ statType }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.stat-number {
    font-weight: 300;
    font-size: 4rem;
}

.stat-type {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 1.4rem;
}
</style>