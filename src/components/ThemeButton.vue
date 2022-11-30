<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/stores/main'

const theme = ref('dark')
const main = useMainStore()

function onClick() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  main.theme = theme.value
}
</script>
<template>
  <v-tooltip location="bottom">
    <template v-slot:activator="{ props: tooltip }">
      <v-btn variant="text" :icon="theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick"
        v-bind="tooltip"></v-btn>
    </template>
    <span>{{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}}</span>
  </v-tooltip>
</template>
