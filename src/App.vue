<template>
  <v-app id="app">
    <Menu></Menu>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import Component from 'vue-class-component';

@Component({
  props: {
    source: String,
  },
  components: {
    Menu,
    Header,
    Content,
    Footer,
  },
})
export default class App extends Vue {
  private created() {
    this.$vuetify.theme.dark = true;
  }
}
</script>
