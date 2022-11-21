<script>
import { store } from "../store";

export default {
    name: "AppSubscribeNewsletter",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="subscribe-newsletter">
        <div class="container">
            <div class="subscribe-newsletter-content py-4 d-flex">
                <div class="suscribe-text d-flex flex-column justify-content-between">
                    <h6>Suscribe our newsletter</h6>
                    <p>There are many variations of passages of Lorem Ipsum avaible, but the majority have suffered
                        alteration in some form, by injected humor, or randomised words</p>
                </div>

                <div class="subscribe-input d-flex flex-column justify-content-between">
                    <label for="newsletter">YOUR E-MAIL ADDRESS</label>
                    <div class="subscribe-input-bar d-flex">
                        <input class="flex-grow-1" type="email" id="newsletter" placeholder="Enter your E-mail"
                            v-model="store.inputNewsletter">
                        <button class="btn btn-primary">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.subscribe-newsletter {
    background-color: $col-bg-subscrive;
    color: $col-white;
}

.subscribe-newsletter-content {
    width: 100%;
    height: 160px;

    .suscribe-text {
        width: 50%;
        height: 100%;

        h6 {
            font-weight: 600;
        }

        p {
            font-size: 0.75rem;
        }
    }

    .subscribe-input {
        width: 50%;
        height: 100%;

        label {
            font-size: 0.8rem;
        }
    }
}
</style>
