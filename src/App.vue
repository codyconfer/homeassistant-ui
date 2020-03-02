<template>
  <v-app>
    <Menu></Menu>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Component from 'vue-class-component';

@Component({
  props: {
    source: String,
  },
  components: {
    Menu,
    Header,
    Footer,
  },
})
export default class App extends Vue {
  private created() {
    this.$vuetify.theme.dark = true;
  }
}
</script>

<style lang="sass">
$is-mobile: "only screen and (max-width : 900px)"
$is-tablet: "only screen and (max-width : 1350px)"
$is-desktop: "only screen and (min-width : 1350px)"

.container
  padding: 0

a
  text-decoration: none
</style>
