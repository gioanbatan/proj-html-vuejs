<script>
export default {
    name: "AppQuote"
}
</script>

<template>
    <section class="quote">
        <div class="container d-flex align-item-center">
            <div class="quote-content my-5">
                <div class="quote-text">
                    <h2 class="pb-3">Come as you are</h2>

                    <p class="pb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nostrum sit
                        aperiam, velit
                        doloremque, est rem quae omnis quibusdam deserunt obcaecati. Eveniet dolorum maxime aperiam rem?
                        Nam
                        esse recusandae incidunt!</p>

                    <h5>Tim Sab</h5>
                    <span>General Developer, Stylemix Themes</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.quote {
    background-image: url(../assets/img/brooke-cagle-224821-unsplash-1-1920x700.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.quote-content {
    width: 60%;
    min-height: 500px;
    position: relative;
}


.quote-text {
    width: 100%;
    height: 100%;
    padding: 7rem;

    background-color: $col-white;

    h5 {
        font-weight: 500;
    }

    p {
        font-size: 1.3rem;
        font-weight: 200;
    }

    span {
        font-size: 0.9rem;
    }
}

.quote-text::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%) rotate(45deg);
    width: 2rem;
    height: 2rem;

    background-color: $col-white;
}
</style>