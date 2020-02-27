<template>
  <v-app id="app">
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/bXNzZL"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; {{year}}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Menu from './components/Menu.vue';

export default Vue.extend({
  name: 'App',
  props: {
    source: String
  },
  components: {
    Menu
  },
  data: () => ({
    drawer: null,
    year: new Date().getFullYear()
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
});
</script>
