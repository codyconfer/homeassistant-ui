<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
          <v-switch v-model="isOn"></v-switch>
          <h1>{{title}}</h1>
      </v-row>
      <v-row align="center" justify="center">
        <v-card>
          <v-label>Entity</v-label>
          <v-autocomplete class="entity"></v-autocomplete>
        </v-card>
      </v-row>
      <v-row align="center" justify="center">
        <v-card>
          <v-label>Brightness</v-label>
          <v-slider v-model="brightness" class="brightness"></v-slider>
        </v-card>
      </v-row>
      <v-row align="center" justify="center">
        <v-card>
          <v-label>Color</v-label>
          <v-color-picker class="color"></v-color-picker>
        </v-card>
      </v-row>
      <v-row align="center" justify="center">
        <v-card class="btn-group">
          <v-btn depressed color="success">Save</v-btn>
          <v-btn depressed color="primary">Apply</v-btn>
          <v-btn depressed color="error">Cancel</v-btn>
        </v-card>
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
  private data() {
    return {
      title: 'Lights Edit',
      entityId: 'lights.colorlamp',
      brightness: 55,
      color: '#34343434',
      isOn: true,
    };
  }
}
</script>

<style lang="sass">
$is-mobile: "only screen and (max-width : 900px)"

.v-card
  width: 60%
  padding: 20px 0 20px 0
  margin: 10px 0 10px 0
  display: grid
  justify-content: center
  @media #{$is-mobile}
    width: 100%
    padding: 15px 0 15px 0
    margin: 5px 0 5px 0

.row
  @media #{$is-mobile}
    margin-left: 0
    margin-right: 0

.brightness, .entity, .color
  min-width: 500px
  margin: 8px 0
  @media #{$is-mobile}
    min-width: 300px

.brightness
  margin-

.btn-group
  display: grid
  grid-template-columns: auto auto auto
  grid-column-gap: 5px
</style>