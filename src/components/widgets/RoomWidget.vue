<template>
  <section>
    <RoomWidgetSimple></RoomWidgetSimple>
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
import RoomWidgetSimple from './RoomWidgetSimple.vue';
import { namespace as displayNamespace } from '../../store/display/index';

@Component({
  components: {
    RoomWidgetSimple,
  },
})
export default class RoomWidget extends Vue {}
</script>
