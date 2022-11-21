<script>
export default {
    name: "AppMeritCard",
    props: {
        icon: String,
        title: String,
        text: String
    }
}
</script>  

<template>
    <section class="merit-card p-4">
        <i :class="`d-block pb-4 ${icon}`"></i>
        <h5>{{ title }}</h5>
        <p>{{ text }}</p>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;


.merit-card {
    background-color: $col-light-blue;
    width: 100%;
    height: 100%;

    i {
        font-size: 3rem;
        color: $col-std-blue;
    }

    h5 {
        font-size: 1rem;
    }

    p {
        font-size: 0.9rem;
        color: $col-gray;
    }
}

.merit-card:hover {
    transform: translate(0, -10px);

    p {
        color: $col-text;
    }
}
</style>