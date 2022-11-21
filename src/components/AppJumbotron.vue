<script>
export default {
    name: "AppJumbotron"
}
</script>

<template>
    <section class="jumbotron">
        <div class="container">
            <div class="jumbotron-content p-2 d-flex flex-column align-items-start justify-content-center">
                <h2 class="pb-4">Limitless learning, more possibilities</h2>

                <p class="pb-4">Online courses open the opportunity for learning to almost anyone, regardless of their
                    scheduling
                    commitments.
                </p>

                <button class="ms_std-btn">read more</button>
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
    height: 600px;

    h2 {
        font-weight: 300;
        font-size: 3rem;
    }

    p {
        font-size: 1.4rem;
    }
}
</style>