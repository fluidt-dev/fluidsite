<script setup>
import { RouterView } from "vue-router";
import { useMainStore } from '@/stores/main'
import SettingsMenu from '@/components/SettingsMenu.vue'

const main = useMainStore()
</script>

<template>
  <v-app :theme="main.theme">
    <v-app-bar>
      <v-app-bar-title>
        <v-icon icon="mdi-water" color="blue" />fluidt.dev
      </v-app-bar-title>
      <v-btn to="/">
        <v-icon icon="mdi-home" />Home
      </v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/page/test">Test</v-btn>
      <v-spacer></v-spacer>
      <SettingsMenu />
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>

    <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      &copy; {{ new Date().getFullYear() }}  <strong>fluidt.dev</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

