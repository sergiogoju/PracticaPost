<template>
    <div class="post">
        <div v-if="entry.emoji">
            <img :src="`/src/assets/emojis/${entry.emoji}.svg`" alt="" class="emoji" />
        </div>
        <div>
            {{ entry.body }}
        </div>
        <p class="date">
            {{ formatDate(entry.dataCreacio) }} | {{ user.username }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type Entry from "@/types/Entry";
import type User from "@/types/User";

const user: User = {
    id: 1,
    username: "Sergio González",
};

defineProps<{
    entry: Entry;
}>();

const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `Dia ${day}/${month}/${year} a les ${hours}:${minutes}:${seconds}`;
};
</script>

<style scoped>
.post {
    background-color: rgb(144, 205, 255);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.emoji {
    width: 40px;
    height: 40px;
}
</style>