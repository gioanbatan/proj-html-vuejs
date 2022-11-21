<script>
import AppStdNavMenu from "./AppStdNavMenu.vue";
import AppStdIconLinks from "./AppStdIconLinks.vue";
import AppSearch from "./AppSearch.vue";
import { store } from "../store";

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    components: {
        AppStdNavMenu,
        AppStdIconLinks,
        AppSearch
    }
}

</script>

<template>
    <header>
        <!-- Header top -->
        <section class="header-top d-flex justify-content-between align-items-center">
            <div class="language">
                <select name="language" id="language">
                    <option v-for="(language, index) in store.languageOptions" :key="index" :value="language.id">{{
                            language.name
                    }}</option>
                </select>
            </div>

            <nav class="flex-grow-1 justify-content-end align-items-center">
                <AppStdNavMenu class="justify-content-end" :menuItems="store.navItems" />
            </nav>

            <div class="links-icons">
                <AppStdIconLinks :icons="store.headerIcons" />
            </div>
        </section>
        <!-- /Header top -->

        <!-- Header bottom -->
        <section class="header-bottom d-flex justify-content-between align-items-center">
            <div class="logo-container">
                <a href="">
                    <img src="../assets/img/MasterStudy_logo.svg" alt="Master Study">
                </a>
            </div>

            <div class="search-bar">
                <AppSearch :searchType="'Search course'" :categories="store.macroCategories" />
            </div>

            <div class="actions d-flex align-items-center">
                <a href="">
                    <i class="fa-solid fa-bullhorn"></i>
                    Become an instructor
                </a>
                <a href="">
                    <i class="fa-solid fa-briefcase"></i>
                    For Enterprise
                </a>
            </div>

            <div class="user-options d-flex align-items-center">
                <a v-if="!store.isLogged" href="">
                    <i class="fa-regular fa-user"></i>
                    Log In
                </a>
                <a v-else href="">
                    <i class="fa-regular fa-user"></i>
                    USERNAME
                </a>

                <button class="btn btn-primary ms_btn">
                    Sign up
                </button>

                <div class="add-favorites">
                    <a href="">
                        <i class="fa-regular fa-bookmark"></i>
                    </a>
                </div>
            </div>



        </section>
        <!-- /Header bottom -->
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

header {
    position: fixed;
    width: 100%;
    height: $header-height;
    background-color: $col-white;
}

.header-top {
    font-size: 0.7rem;
    height: 45%;

    // DEBUG
    border-bottom: 1px solid black;

    .links-icons {
        font-size: 0.8rem;
    }
}

.header-bottom {
    font-size: 0.8rem;
    height: 55%;

    // DEBUG
    border-bottom: 1px dashed black;

    .actions {
        i {
            color: $col-std-blue;
        }
    }

    .user-options,
    .add-favorites {
        a {
            color: $col-std-blue
        }
    }
}


.ms_btn {
    font-size: 0.8rem;
}
</style>