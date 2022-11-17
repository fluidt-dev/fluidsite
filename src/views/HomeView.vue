<script setup>
</script>

<template>
  <v-parallax height="600" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        fluidt.dev
      </h1>
      <h4 class="subheading">
        Applications that flow.
      </h4>
    </div>
  </v-parallax>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card max-width="400">
          <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
            <v-card-title>Development Made Easy</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Development that flows like water.
          </v-card-subtitle>

          <v-card-text>
            <div>Development Never Stops</div>

            <div>It flows around the need of the business</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
