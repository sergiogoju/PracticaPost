<template>
    <div>
        <h1><img class="diari" src="/src/assets/diari.svg" /> El meu diari</h1>
        <form @submit.prevent="gestionarSubmit">
            <textarea v-model="body" ref="textarea" @input="recollirTextForm" name="el meu diari" cols="50"
                rows="10"></textarea>
            <Emoticonos v-model="emoji" />
            <div class="form-footer">
                <span class="char-count">{{ charCount }}/{{ maxCaracters }}</span>
                <button class="post" type="submit">Postejar</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits } from "vue";
import Emoticonos from "@/components/Emoticonos.vue";
import type Entry from "@/types/Entry";
import type Emoji from "@/types/Emoji";

const emit = defineEmits(["create"]);

const maxCaracters = 280;
const body = ref("");
const emoji = ref<Emoji | null>(null);
const charCount = computed(() => body.value.length);

const recollirTextForm = (e: Event) => {
    const textarea = e.target as HTMLTextAreaElement;
    if (textarea.value.length <= maxCaracters) {
        body.value = textarea.value;
    } else {
        body.value = textarea.value = textarea.value.substring(0, maxCaracters);
    }
};

const gestionarSubmit = () => {
    emit("create", {
        body: body.value,
        emoji: emoji.value,
        dataCreacio: new Date(),
        userId: 1,
        id: Math.random(),
    });
    body.value = "";
    emoji.value = null;
};
</script>

<style scoped>
.post {
    margin-left: 10px;
    padding: 10px 15px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.diari {
    height: 40px;
}

.char-count {
    margin-right: 10px;
    font-size: 14px;
}

textarea {
    width: 600px;
    height: 300px;
}
</style>