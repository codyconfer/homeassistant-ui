<template>
  <section>
    <v-card>
      <v-btn depressed small color="primary">Primary</v-btn>
      <v-autocomplete></v-autocomplete>
      <v-switch></v-switch>
    </v-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { WidgetTypes } from './widgetTypes';
import { namespace as displayNamespace } from '../../store/display/index';

export const Type = WidgetTypes.RoomSimple;

@Component
export default class RoomWidgetSimple extends Vue {}
</script>
