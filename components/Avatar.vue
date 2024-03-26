<template>
    <!-- Avatar component, either receive a text or a url. If no url is given, display the text with a given color-->

    <div class="flex items-center">
        <div v-if="url">
            <img :src="url" class="w-10 h-10 rounded-full" />
        </div>
        <div v-else>
            <div :style="{ backgroundColor: color }" class="w-10 h-10 rounded-full flex items-center justify-center">
                <span class="text-white
                font-bold">{{ text.substring(0, 2).toUpperCase() }}</span>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const url = ref('')
const text = ref('')
const color = ref('black')
</script>