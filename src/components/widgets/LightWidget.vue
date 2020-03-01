<template>
  <section>
    <LightWidgetSimple></LightWidgetSimple>
    <v-card>
      <v-slider></v-slider>
      <v-color-picker></v-color-picker>
    </v-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Getter } from 'vuex-class';
import Component from 'vue-class-component';
import LightWidgetSimple from './LightWidgetSimple.vue';
import { namespace as displayNamespace } from '../../store/display/index';

@Component({
  components: {
    LightWidgetSimple,
  },
})
export default class LightWidget extends Vue {}
</script>
