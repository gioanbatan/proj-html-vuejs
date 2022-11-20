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
    <label for="category"><i class="fa-solid fa-bars"></i></label>
    <select name="category" id="category" v-model="store.inputSearchCategory">
        <option selected value="" disabled hidden>CATEGORY</option>
        <option v-for="(selected, index) in categories" :key="index" :value="selected.name">{{ selected.name }}</option>
    </select>

    <label for="search" hidden>{{ searchType }}</label>
    <input type="text" id="search" :placeholder="searchType" v-model="store.inputSearch"
        @keyup.enter="$emit('startSearch')">
    <button @click="$emit('startSearch')" class="btn btn-primary ms_btn">
        <i class="fa-solid fa-magnifying-glass"></i>
    </button>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>