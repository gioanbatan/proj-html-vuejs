<script>
import { store } from "../store";

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    },
    props: {
        searchType: String,
        categories: Array
    }
}

</script>

<template>
    <section class="select-category d-flex align-items-center justify-content-end">
        <label class="text-right" for="category">
            <i class="fa-solid fa-bars"></i>
        </label>
        <select class="ms_std-select" name="category" id="category" v-model="store.inputSearchCategory">
            <option selected value="" disabled hidden>CATEGORY</option>
            <option v-for="(selected, index) in categories" :key="index" :value="selected.name">{{ selected.name }}
            </option>
        </select>
    </section>

    <section class="input-search d-flex flex-grow-1 px-2">
        <label for="search" hidden>{{ searchType }}</label>
        <input type="text" id="search" :placeholder="searchType" v-model="store.inputSearch"
            @keyup.enter="$emit('startSearch')">
        <button @click="$emit('startSearch')" class="ms_std-btn-rect d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

label {
    display: inline;
}

select {
    appearance: unset;
}

.input-search {
    input {
        width: 100%;
        background-color: $col-light-gray;
        border: none;
        height: 2.8rem;
        padding: 0.2rem;
    }

    button {
        width: 3.3rem;
        height: 2.8rem;
    }
}
</style>