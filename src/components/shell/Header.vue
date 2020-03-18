<template>
  <v-app-bar app clipped-left flat>
    <v-app-bar-nav-icon @click.stop="toggleMenu" />
    <v-toolbar-title class="menu-content">
      <section>
        <router-link to="/">Application</router-link>
      </section>
      <section>
        <v-btn depressed small color="primary">
          <v-icon class="small-font">mdi-pencil-outline</v-icon>
        </v-btn>
      </section>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Action } from 'vuex-class';
import Component from 'vue-class-component';
import { namespace as displayNamespace } from '../../store/display/index';

@Component
export default class Header extends Vue {
  @Action('toggleMenu', { namespace: displayNamespace })
  private toggleMenu: any;
}
</script>

<style lang="sass" scoped>
.v-application
  header
    display: grid
    z-index: 20
    a
      color: #eee

.small-font
  font-size: 1.1rem

.menu-content
  display: grid
  grid-template-columns: 50fr 1fr
  align-items: center
</style>
