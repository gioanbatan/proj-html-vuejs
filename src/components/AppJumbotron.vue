<script>
export default {
    name: "AppJumbotron"
}
</script>

<template>
    <section class="jumbotron">
        <div class="container">
            <div class="jumbotron-content">
                <h2 class="pb-4">Limitless learning, more possibilities</h2>

                <p class="pb-4">Online courses open the opportunity for learning to almost anyone, regardless of their
                    scheduling
                    commitments.
                </p>

                <button class="btn btn-primary">READ MORE</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.jumbotron {
    background-image: url(../assets/img/Untitled-1-1-1-1-1.png);
    background-size: cover;
    background-position: center;
}

.jumbotron-content {
    width: 50%;
    height: 500px;
    padding: 5rem;
}
</style>