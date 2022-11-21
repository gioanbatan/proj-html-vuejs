<script>
export default {
    name: "AppMerits"
}

</script>

<template>
    <section class="merits">
        <div class="container">
            <div class="merits-content">
                <div class="row row-cols-3">
                    <div class="col ">
                        COLONNA
                    </div>
                    <div class="col">
                        COLONNA
                    </div>
                    <div class="col">
                        COLONNA
                    </div>
                </div>
            </div>
        </div>

    </section>


</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.col {

    // DEBUG
    background-color: aqua;
    border-radius: 10px;
    height: 100px;
}
</style>