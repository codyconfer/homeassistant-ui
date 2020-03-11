<template>
  <v-container fluid>
    <v-row class="section-header wrapper" align="center" justify="center">
      <h1 class="title">{{ title }}</h1>
      <v-switch v-model="isOn"></v-switch>
    </v-row>
    <v-card class="section-form wrapper">
      <v-col align="center" justify="center">
        <v-row class="form-field" align="center" justify="center">
          <v-label>Entity</v-label>
        </v-row>
        <v-row class="form-field" align="center" justify="center">
          <v-autocomplete class="entity"></v-autocomplete>
        </v-row>
        <v-row class="form-field" align="center" justify="center">
          <v-label>Brightness</v-label>
        </v-row>
        <v-row class="form-field" align="center" justify="center">
          <v-slider v-model="brightness" class="brightness"></v-slider>
        </v-row>
        <v-row class="form-field" align="center" justify="center">
          <v-label>Color</v-label>
        </v-row>
        <v-row class="form-field" align="center" justify="center">
          <v-color-picker class="color"></v-color-picker>
        </v-row>
        <v-row align="center" justify="center" class="btn-group form-field">
          <v-btn depressed small color="success">Save</v-btn>
          <v-btn depressed small color="primary">Apply</v-btn>
          <v-btn depressed small color="error">Cancel</v-btn>
        </v-row>
      </v-col>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';

@Component({
  components: {},
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

<style lang="sass" scoped>
$is-mobile: "only screen and (max-width : 900px)"

// #lights-colorlamp
//   @media #{$is-mobile}
//     margin-top: 7vh

.container
  width: 100%
  padding: 0

.wrapper
  width: 85%
  display: grid
  font-size: 0.8rem
  @media #{$is-mobile}
    width: 100%
    padding: 5px 15px

.section-header
  text-align: left
  justify-content: left
  grid-template-columns: 1fr auto

// .section-form
//   justify-content: center
//   grid-template-rows: 5vh 6vh 7vh 5vh 5vh 40vh 8vh

// .brightness, .entity
//   align-content: center

// .btn-group
//   display: grid
//   grid-template-columns: auto auto auto
//   grid-column-gap: 8vw

.title
  @media #{$is-mobile}
    font-size: 0.7rem

.v-label
  @media #{$is-mobile}
    font-size: 0.7rem
</style>
