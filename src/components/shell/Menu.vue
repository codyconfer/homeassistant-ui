<template>
  <section class="nav-drawer">
    <v-navigation-drawer :value="showMenu" app clipped flat>
      <v-list dense>
        <v-list-item @click.stop="toggleMenu" link>
          <v-list-item-action>
            <v-icon>mdi-close</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Close</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/panel">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Panel</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/panel/edit">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Panel Edit</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/light/edit">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Light Edit</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Getter, Action } from 'vuex-class';
import Component from 'vue-class-component';
import { namespace as displayNamespace } from '../../store/display/index';

@Component
export default class Menu extends Vue {
  @Getter('showMenu', { namespace: displayNamespace })
  private showMenu?: boolean;

  @Action('toggleMenu', { namespace: displayNamespace })
  private toggleMenu: any;
}
</script>

<style lang="sass">
.nav-drawer
  z-index: 30
</style>
