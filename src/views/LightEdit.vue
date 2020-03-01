<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <h1>Light Edit</h1>
        <Default></Default>
        <LightWidget></LightWidget>
        <RoomWidget></RoomWidget>
        <LightWidgetSimple></LightWidgetSimple>
        <RoomWidgetSimple></RoomWidgetSimple>
        <SceneWidget></SceneWidget>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import Default from '../components/Default.vue';
import LightWidget from '../components/widgets/LightWidget.vue';
import LightWidgetSimple from '../components/widgets/LightWidgetSimple.vue';
import RoomWidget from '../components/widgets/RoomWidget.vue';
import RoomWidgetSimple from '../components/widgets/RoomWidgetSimple.vue';
import SceneWidget from '../components/widgets/SceneWidget.vue';

@Component({
  components: {
    Default,
    LightWidget,
    LightWidgetSimple,
    RoomWidget,
    RoomWidgetSimple,
    SceneWidget,
  },
})
export default class LightEdit extends Vue {
  // @State('profile') private profile: ProfileState;
  // @Action('fetchData', { namespace }) private fetchData: any;
  // @Getter('fullName', { namespace }) private fullName: string;
}
</script>
