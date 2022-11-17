<script>
export default {
    name: "AppHeader",
}

</script>

<template>
    <header>
        <!-- Header top -->
        <section class="header-top d-flex justify-content-between align-items-center">
            <div class="language">
                <select name="language" id="language">
                    <option value="en" selected>English</option>
                    <option value="it">Italiano</option>
                </select>
            </div>

            <nav class="d-flex justify-content-end flex-grow-1">
                <ul class="d-flex">
                    <li class="p-1">
                        <a href="">
                            ciao
                        </a>
                    </li>

                    <li class="p-1">
                        <a href="">
                            ciao
                        </a>
                    </li>

                    <li class="p-1">
                        <a href="">
                            ciao
                        </a>
                    </li>

                    <li class="p-1">
                        <a href="">
                            ciao
                        </a>
                    </li>

                    <li class="p-1">
                        <a href="">
                            ciao
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="links-icons">
                <ul class="d-flex">
                    <li>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
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
                <a href="">
                    <span>category</span>
                </a>

                <label for=""></label>
                <input type="text">
                <button class="btn btn-primary ms_btn">
                    GO
                </button>
            </div>

            <div class="actions">
                <a href="">
                    Become an instructor
                </a>
                <a href="">
                    For Enterprise
                </a>
            </div>

            <div class="user-options">
                <a href="">
                    Log In
                </a>

                <button class="btn btn-primary ms_btn">
                    Sign up
                </button>
            </div>


        </section>
        <!-- /Header bottom -->
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

header {
    width: 100%;
    height: $header-height;

    // DEBUG
    background-color: aqua;
}

li {
    list-style: none;
}

.header-top {
    font-size: 0.7rem;

    // DEBUG
    border-bottom: 1px solid black;
}

.header-bottom {
    font-size: 0.8rem;

    // DEBUG
    border-bottom: 1px dashed black;
}

.ms_btn {
    font-size: 0.8rem;
}
</style>