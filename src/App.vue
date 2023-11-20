<script setup lang="ts">
import Formulari from "./components/Formulari.vue";
import Enviat from "./components/Enviat.vue";
import type Entry from "./types/Entry";
import { reactive, ref } from "vue";

const entrades = ref<Entry[]>([]);

const manipularPost = (entradaPost: Entry) => {
    entrades.value.push(entradaPost);
    console.log(entradaPost);
};
</script>

<template>
    <div class="principal">
        <Formulari @create="manipularPost" />
    </div>
    <ul>
        <li v-for="entrada in entrades" :key="entrada.id">
            <Enviat :entry="entrada" />
        </li>
    </ul>
</template>

<style scoped>
.principal {
    width: 800px;
}

ul {
    list-style: none;
}
</style>
