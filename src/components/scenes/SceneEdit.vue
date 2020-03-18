<template>
  <v-container class="scene-edit">
    <SceneEditMenu v-bind:scene="scene"></SceneEditMenu>
    <SceneEditContainer v-bind:scene="scene"></SceneEditContainer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import SceneEditMenu from './SceneEditMenu.vue';
import SceneEditContainer from './SceneEditContainer.vue';
import { Scene } from '../../store/scenes/types';

const SceneEditProps = Vue.extend({
  props: {
    scene: Object as () => Scene,
  },
});

@Component({
  components: {
    SceneEditMenu,
    SceneEditContainer,
  },
})
export default class SceneEdit extends SceneEditProps {
  // @State('profile') private profile: ProfileState;
  // @Action('fetchData', { namespace }) private fetchData: any;
  // @Getter('fullName', { namespace }) private fullName: string;

  private data() {
    return {
      ref: '',
    };
  }
}
</script>

<style lang="sass" scoped>
$is-mobile: "only screen and (max-width : 900px)"
$is-tablet: "only screen and (max-width : 1350px)"
$is-desktop: "only screen and (min-width : 1350px)"

.scene-edit
  padding: 0
</style>
