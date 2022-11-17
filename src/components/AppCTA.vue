<script>
export default {
    name: "AppCTA",
}
</script>

<template>
    <section class="CTA p-5">
        <div class="container">
            <div class="ms_CTA-container">
                <div class="row ms_CTA-container d-flex align-items-center">
                    <div class="col-8">
                        <h2>Start Investing in You</h2>

                        <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for
                            you.</p>

                        <button class="btn btn-primary">Join for free</button>
                    </div>

                    <div class="col-4 ms_img-container d-flex align-items-center">
                        <img src="../assets/img/base.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.CTA {
    // DEBUG
    border-bottom: 1px solid black;
}

.ms_CTA-container {
    width: 100%;
    height: 400px;
}

.ms_img-container {
    // position: relative;
    height: 100%;

    img {
        // position: absolute;
        // top: 0;
        // left: 0;

        width: 100%;
        max-width: none;
    }
}
</style>