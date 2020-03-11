<template>
  <v-container class="panel-view">
    <v-row class="panel-nav wrapper">
      <v-row class="panel-nav-row" align="center" justify="center">
        <ul class="panel-nav-grid">
          <li class="panel-nav-item">^</li>
        </ul>
      </v-row>
      <v-row class="panel-nav-row" align="center" justify="center">
        <ul class="panel-nav-grid">
          <li
            class="panel-nav-item"
            v-for="section in sections"
            :key="section.name"
          >
            <a @click="scrollMeTo(section.ref)">X {{ section.name }}</a>
          </li>
          <li class="panel-nav-item">+</li>
        </ul>
      </v-row>
    </v-row>
    <v-container class="fill-height panel-container" fluid>
      <v-col
        class="panel fill-height"
        v-for="section in sections"
        :key="section.name"
        align="center"
        justify="center"
      >
        <v-row
          class="fill-height panel-content"
          align="center"
          justify="center"
          :ref="section.ref"
        >
          <component :is="section.component"></component>
        </v-row>
      </v-col>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import Default from '../components/Default.vue';
import LightEdit from '../components/panels/LightEdit.vue';

@Component({
  components: {
    Default,
    LightEdit,
  },
})
export default class PanelContainer extends Vue {
  // @State('profile') private profile: ProfileState;
  // @Action('fetchData', { namespace }) private fetchData: any;
  // @Getter('fullName', { namespace }) private fullName: string;
  private data() {
    return {
      sections: [
        { name: 'Alpha', component: 'Default', ref: 'alpha' },
        { name: 'Light', component: 'LightEdit', ref: 'light' },
        { name: 'Omega', component: 'Default', ref: 'omega' },
        { name: 'bOmega', component: 'Default', ref: 'bomega' },
        { name: 'abOmega', component: 'LightEdit', ref: 'bomaega' },
        { name: 'bsmega', component: 'LightEdit', ref: 'bomesga' },
        { name: 'abOmega', component: 'Default', ref: 'bosmaega' },
      ],
    };
  }

  private scrollMeTo(ref: string) {
    const element: any = this.$refs[ref];
    const top = element[0].offsetTop;
    window.scrollTo(0, top);
  }
}
</script>

<style lang="sass" scoped>
$is-mobile: "only screen and (max-width : 900px)"
$is-tablet: "only screen and (max-width : 1350px)"
$is-desktop: "only screen and (min-width : 1350px)"

.panel-view, .panel-container
  @media #{$is-mobile}
    padding: 0 12px

.panel-container
  display: grid
  grid-auto-flow: column
  grid-template-columns: auto
  @media #{$is-mobile}
    grid-auto-flow: row
    grid-template-rows: auto

.panel-nav
  position: fixed
  display: none
  font-size: 0.7rem
  background: #191919
  width: 100vw
  @media #{$is-mobile}
    display: grid
    z-index: 10
    margin-top: 56px
    padding: 5px 10px

.panel-nav-grid
  width: 100%
  @media #{$is-mobile}
    display: grid
    grid-template-columns: repeat(auto-fill, 20%)
    grid-column-gap: 20px
    grid-row-gap: 20px
    padding: 10px 12px

.panel-nav-item
  list-style: none

.panel-nav a
  color: #fff
  @media #{$is-mobile}
    z-index: 100

.panel
  @media #{$is-mobile}
    height: 100%
    min-height: 750px
    padding: 15px 0

.panel-content
  @media #{$is-mobile}
    min-height: 100vh
</style>
