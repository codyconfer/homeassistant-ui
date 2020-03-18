<template>
  <v-container class="fill-height scene-container" fluid>
    <v-col
      class="scene fill-height"
      v-for="section in scene.sections"
      :key="section.name + 'container'"
      align="center"
      justify="center"
    >
      <v-row
        class="fill-height scene-content"
        align="center"
        justify="center"
        :ref="section.ref"
      >
        <component :is="section.component"></component>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import Default from '../Default.vue';
import LightEdit from '../lights/LightEdit.vue';
import { Scene } from '../../store/scenes/types';
import { namespace as displayNamespace } from '../../store/display/index';
import { SceneNavEvents } from './events';

const SceneEditContainerProps = Vue.extend({
  props: {
    scene: Object as () => Scene,
  },
});

@Component({
  components: {
    Default,
    LightEdit,
  },
})
export default class SceneEditContainer extends SceneEditContainerProps {
  private mounted() {
    this.$root.$on(SceneNavEvents.navTo, (ref: string) => {
      this.scrollMeTo(ref);
    });
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

.scene-container
  display: grid
  grid-auto-flow: column
  grid-template-columns: auto
  @media #{$is-mobile}
    grid-auto-flow: row
    grid-template-rows: auto
    padding: 0 12px

.scene
  @media #{$is-mobile}
    height: 100%
    min-height: 810px
    margin: 15px 0

.scene-content
  @media #{$is-mobile}
    min-height: 100vh
</style>
