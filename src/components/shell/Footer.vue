<template>
  <v-footer app flat>
    <span>&copy; Cody Confer {{ year }}</span>
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

<style lang="sass" scoped>
.v-application
  footer
    display: grid
    text-align: right
</style>
