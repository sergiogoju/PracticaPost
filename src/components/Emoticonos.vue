<template>
    <div class="contenidor">
        <div v-for="emoji in emojis" :key="emoji" @click="seleccionarEmoji(emoji)"
            :class="{ seleccionado: modelValue === emoji }">
            <img :src="`./src/assets/emojis/${emoji}.svg`" alt="emoji" class="emoji" />
        </div>
    </div>
</template>

// EmojiPicker.vue
<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import type Emoji from "@/types/Emoji";

const props = defineProps(["modelValue"]);
const emit = defineEmits();

const emojis: Emoji[] = [
    "1F601",
    "1F602",
    "1F603",
    "1F604",
    "1F605",
    "1F606",
    "1F607",
    "1F608",
    "1F609",
    "1F610",
    "1F611",
    "1F612",
    "1F613",
];

const seleccionarEmoji = (emoji: Emoji) => {
    if (props.modelValue === emoji) {
        emit("update:modelValue", null);
    } else {
        emit("update:modelValue", emoji);
    }
};
</script>

<style scoped>
.contenidor {
    display: flex;
    cursor: pointer;
    margin-bottom: 10px;
}

.emoji {
    width: 40px;
    height: 40px;
    border-radius: 25%;
}

.emoji:hover:not(.seleccionado) {
    background-color: rgb(0, 140, 255);
}

.seleccionado {
    background-color: rgb(0, 140, 255);
    border-radius: 25%;
}

.seleccionado:hover {
    transform: scale(1.1);
    background-color: rgb(0, 140, 255);
}
</style>