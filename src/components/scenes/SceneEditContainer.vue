<template>
  <v-container class="fill-height scene-container" fluid>
    <v-col
      class="scene-col"
      v-for="section in scene.sections"
      :key="section.name + 'container'"
      align="center"
      justify="center"
    >
      <v-row
        class="scene fill-height scene-content"
        align="center"
        justify="center"
        v-if="section.active"
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
      this.activateSection(ref);
    });
  }

  private activateSection(ref: string): void {
    this.scene.sections.forEach((section) => {
      if (section.ref === ref) {
        section.active = true;
      } else {
        section.active = false;
      }
    });
  }
}
</script>

<style lang="sass" scoped>
$is-mobile: "only screen and (max-width : 900px) and (orientation: portrait)"
$is-mobile-landscape: "only screen and (max-width : 900px) and (orientation: landscape)"
$is-tablet: "only screen and (max-width : 1350px)"
$is-desktop: "only screen and (min-width : 1350px)"

.scene-container
  display: grid
  grid-auto-flow: column
  grid-template-columns: auto
  z-index: 0
  @media #{$is-mobile}
    grid-auto-flow: row
    grid-template-rows: auto

.scene-col
  padding: 2px 12px

.scene-content
  @media #{$is-mobile}
    min-height: 93vh
    height: 100%
</style>
