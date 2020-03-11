<template>
  <v-col class="shrink">
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <v-btn icon large target="_blank" v-on="on">
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
</template>

<script lang="ts">
import Vue from 'vue';
import { Action } from 'vuex-class';
import Component from 'vue-class-component';
import { namespace as displayNamespace } from '../store/display/index';

@Component
export default class Default extends Vue {
  private toggleMenu: any;
}
</script>
