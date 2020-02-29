<template>
  <main>
    <v-navigation-drawer v-model="showMenu" app clipped>
      <v-list dense>
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
      </v-list>
    </v-navigation-drawer>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { namespace as displayNamespace } from '../store/display/index';

@Component
export default class Menu extends Vue {
  @Getter('showMenu', { namespace: displayNamespace })
  private showMenu?: boolean;
}
</script>
