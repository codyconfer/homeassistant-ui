<template>
  <v-footer app>
    <span>&copy; {{ year }}</span>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Footer extends Vue {
  get year(): string {
    return new Date().getFullYear().toString();
  }
}
</script>
