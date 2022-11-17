<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue'

const theme = ref('dark')

function onClick() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-app-bar-title>
        <v-icon icon="mdi-water" color="blue" />fluidt.dev
      </v-app-bar-title>
      <v-btn to="/">
        <v-icon icon="mdi-home" />Home
      </v-btn>
      <v-btn to="/about">About</v-btn>
      <v-spacer></v-spacer>

      <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">Toggle Theme
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

