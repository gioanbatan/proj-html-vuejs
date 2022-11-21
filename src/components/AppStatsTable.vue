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
    font-size: 3rem;
}

.stat-number {
    text-transform: uppercase;
    font-size: 2rem;
}
</style>