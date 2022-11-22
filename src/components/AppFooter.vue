<script>
import { store } from "../store";
import AppStdIconLinksVue from "./AppStdIconLinks.vue";
import AppBlogPostPreview from "./AppBlogPostPreview.vue";

export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    },
    components: {
        AppStdIconLinksVue,
        AppBlogPostPreview
    }
}
</script>

<template>
    <footer class="py-5 mt-3">
        <div class="container">
            <div class="footer-content">
                <div class="row row-cols-4 gx-5">
                    <div class="col about">
                        <h6 class="pb-4">About</h6>
                        <p><a href="">Masterstudy</a> is Education WordPress theme featured by Learning Management
                            System (LMS) for online education.
                            <br>
                            Developed by <a href="">StylemixThemes</a>.
                        </p>
                        <AppStdIconLinksVue class="ms_icon-size col-gray" :icons="store.footerIcons" />
                    </div>
                    <div class="col contact">
                        <h6 class="pb-4">Contact</h6>
                        <p>USA, California 20, First Avenue, Callifornia</p>
                        <span class="d-block">Tel:{{ store.infoTel }}</span>
                        <span class="d-block">Fax:{{ store.infoFax }}</span>
                        <br>
                        <a class="d-block col-gray" href="">{{ store.infoMail }}</a>
                    </div>
                    <div class="col pages">
                        <h6 class="pb-4">Pages</h6>
                        <ul>
                            <li v-for="(page, index) in store.pagesList" :key="index">
                                <a :href="page.link">
                                    {{ page.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col blog">
                        <h6 class="pb-4">Blog</h6>
                        <AppBlogPostPreview :postQty="2" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

.footer-content {
    h6 {
        font-weight: 500;
        font-size: 1.1rem;
    }
}

.about {
    p {
        font-size: 0.8rem;
    }

    a {
        color: $col-std-blue;
    }
}

.contact {
    font-size: 0.8rem;
}

.pages {
    font-size: 0.9rem;

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            position: relative;
            line-height: 2rem;
            width: 50%;
            list-style: initial;
            list-style-position: inside;
            overflow: hidden;
        }

        li:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 100%;
            background: linear-gradient(to right, transparent, $col-white 20px);
        }
    }

}

.ms_icon-size {
    font-size: 1.4rem;
}
</style>