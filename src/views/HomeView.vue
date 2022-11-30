<script>
// In your VueJS component.
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import InfoCard from '@/components/InfoCard.vue'
import SnowStorm from '@/components/SnowStorm.vue'
import { mapStores, mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

//const main = useMainStore()

export default {
  name: "HomeView",
  components: {
    SshPre,
    InfoCard,
    SnowStorm,
  },
  data() {
    return {
      news: [
        {
          title: 'Development Made Easy',
          subTitle: 'Development that flows like water.',
          image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          content: '<div>Development Never Stops</div><div></div>It flows around the need of the business'
        },
        {
          title: 'Virtscape building a better future',
          subTitle: 'Manage your virtual enviornments',
          image:'https://img.freepik.com/premium-photo/abstract-cube-background-construction-block-background_1962-1829.jpg',
          content:'<p>Easily Manage, and migrate your applications with a click of the button using Virtscape.</p>'
        }
      ],
      tab: null,
      input: ""
    }
  },
  computed: {
    ...mapStores(useMainStore),
    ...mapState(useMainStore, ['theme']),
    output() {
      try {
        return JSON.parse(this.input);
      } catch (e) {
        return "No JSON to Output";
      }
    },
    store() {
      return { theme: "dark" }
    }
  }
}
</script>

<template>
  <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        fluidt.dev
      </h1>
      <h4 class="subheading">
        Applications that flow.
      </h4>
    </div>
  </v-parallax>
  <v-tabs v-model="tab" center-active>
    <v-tab value="news">News</v-tab>
    <v-tab value="tools">Tools</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="news">
      <v-container fluid>
        <v-row>
          <v-col v-for="item in news" :key="item.title">
            <InfoCard :title="item.title" :subTitle="item.subTitle" :image="item.image" :content="item.content">
            </InfoCard>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>

    <v-window-item value="tools">
      <v-container fluid>
        <v-card>
          <v-toolbar title="JSON Whitespace Remover" color="blue">
          </v-toolbar>
          <v-container>
            <v-row>
              <v-col>
                <v-textarea v-model="input" label="JSON"></v-textarea>
              </v-col>
              <v-col>
                <ssh-pre reactive :dark="theme == 'dark'" copy-button language="json">
                  {{ JSON.stringify(output) }}
                </ssh-pre>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <SnowStorm></SnowStorm>     
      </v-container>
    </v-window-item>
  </v-window>
</template>
