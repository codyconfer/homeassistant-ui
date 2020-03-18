<template>
  <v-container class="scene-view">
    <SceneEdit v-bind:scene="scene.value"></SceneEdit>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import SceneEdit from '../components/scenes/SceneEdit.vue';
import { Scene } from '../store/scenes/types';

@Component({
  components: {
    SceneEdit,
  },
})
export default class SceneView extends Vue {
  // @State('profile') private profile: ProfileState;
  // @Action('fetchData', { namespace }) private fetchData: any;
  // @Getter('fullName', { namespace }) private fullName: string;

  private data() {
    return {
      scene: {
        type: Object as () => Scene,
        value: {
          id: 0,
          name: 'scene',
          sections: [
            { name: 'Alpha', component: 'Default', ref: 'alpha' },
            { name: 'Light', component: 'LightEdit', ref: 'light' },
            { name: 'Omega', component: 'Default', ref: 'omega' },
            { name: 'bOmega', component: 'Default', ref: 'bomega' },
            { name: 'abOmega', component: 'LightEdit', ref: 'bomaega' },
            { name: 'bsmega', component: 'LightEdit', ref: 'bomesga' },
            { name: 'abOmeega', component: 'Default', ref: 'bosmaega' },
          ],
        },
      },
    };
  }
}
</script>

<style lang="sass" scoped>
$is-mobile: "only screen and (max-width : 900px)"
$is-tablet: "only screen and (max-width : 1350px)"
$is-desktop: "only screen and (min-width : 1350px)"

.scene-view
  padding: 0
</style>
