<script>
export default {
    name: "AppCTA",
}
</script>

<template>
    <section class="CTA p-5">
        <div class="container">
            <div class="row">
                <div class="col-7">
                    <div class="ms_CTA-text d-flex flex-column align-items-start justify-content-center">
                        <h2>Start Investing in You</h2>

                        <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right
                            for you.</p>

                        <button class="ms_std-btn">Join for free</button>
                    </div>
                </div>

                <div class="col-5">
                    <div class="ms_CTA-image d-flex align-items-center">
                        <img src="../assets/img/base.png" alt="">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.ms_CTA-text {
    width: 100%;
    height: 500px;

    h2 {
        font-weight: 300;
        font-size: 4rem;
    }

    p {
        font-size: 1.4rem;
    }
}

.ms_CTA-image {
    position: relative;
    height: 100%;

    img {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        max-width: none;
        max-height: 100%;
    }
}
</style>