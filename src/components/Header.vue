<template>
  <v-app-bar app clipped-left flat>
    <v-app-bar-nav-icon @click.stop="toggleMenu" />
    <v-toolbar-title>
      <router-link to="/">Application</router-link>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Action } from 'vuex-class';
import Component from 'vue-class-component';
import { namespace as displayNamespace } from '../store/display/index';

@Component
export default class Header extends Vue {
  @Action('toggleMenu', { namespace: displayNamespace })
  private toggleMenu: any;
}
</script>

<style lang="sass">
.v-application
  header
    display: grid
    a
      color: #eee
</style>
