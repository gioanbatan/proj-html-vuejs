<script>
export default {
    name: "AppStdNavMenu",
    props: {
        menuItems: Object
    }
}

</script>

<template>
    <ul class="d-flex">
        <li v-for="(item, index) in menuItems" :key="index" class="p-1">
            <a :href="item.link">
                {{ item.name }}
                <div v-if="item.newFlag" class="new">NEW</div>
            </a>
        </li>
    </ul>


</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

a {
    position: relative;

    .new {
        position: absolute;
        top: -0.7rem;
        right: -0.5rem;
        font-size: 0.45rem;
        padding: 0.08rem;
        background-color: $col-important;
        border-radius: 3px 3px 3px 0;
        color: $col-white;
    }
}
</style>