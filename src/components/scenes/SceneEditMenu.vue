<template>
  <section>
    <v-overlay :value="showExpandable" z-index="10"></v-overlay>
    <v-container class="scene-edit-nav wrapper">
      <v-row class="scene-edit-nav-row" align="center" justify="center">
        <ul class="scene-edit-nav-grid">
          <li class="scene-edit-nav-close">
            <v-btn @click="toggleSceneMenu()" depressed small color="primary">
              <v-icon v-model="toggleIcon">{{ toggleIcon }}</v-icon>
            </v-btn>
          </li>
        </ul>
      </v-row>
      <section v-show="showExpandable" class="scene-edit-nav-expandable">
        <v-row class="scene-edit-nav-row" align="center" justify="center">
          <ul class="scene-edit-nav-grid">
            <li
              class="scene-edit-nav-item"
              v-for="section in scene.sections"
              :key="section.name + 'menu'"
            >
              <v-btn
                @click="emitSceneNavTo(section.ref)"
                depressed
                small
                color="error"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-btn
                @click="emitSceneNavTo(section.ref)"
                depressed
                small
                color="grey darken-4"
              >
                {{ section.name }}
              </v-btn>
            </li>
            <li class="scene-edit-nav-add">
              <v-btn depressed small color="success">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </li>
          </ul>
        </v-row>
      </section>
    </v-container>
  </section>
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

const SceneEditMenuProps = Vue.extend({
  props: {
    scene: Object as () => Scene,
  },
});

const SceneEditMenuToggleIcons = {
  menuHide: 'mdi-menu-down',
  menuShow: 'mdi-menu-up',
};

@Component({
  components: {},
})
export default class SceneEditMenu extends SceneEditMenuProps {
  @Getter('showSubMenu', { namespace: displayNamespace })
  private showExpandable?: boolean;

  @Action('toggleSubMenu', { namespace: displayNamespace })
  private toggleSubMenu: any;

  get toggleIcon(): string {
    return this.$data._toggleIcon;
  }

  set toggleIcon(value: string) {
    this.$data._toggleIcon = value;
  }

  private data() {
    return { _toggleIcon: this.determineToggleIcon() };
  }

  private determineToggleIcon(): string {
    return this.showExpandable
      ? SceneEditMenuToggleIcons.menuShow
      : SceneEditMenuToggleIcons.menuHide;
  }

  private toggleSceneMenu(): void {
    this.toggleSubMenu();
    this.toggleIcon = this.determineToggleIcon();
  }

  private emitSceneNavTo(ref: string): void {
    this.$root.$emit(SceneNavEvents.navTo, ref);
    this.toggleSceneMenu();
  }
}
</script>

<style lang="sass" scoped>
$is-mobile: "only screen and (max-width : 900px)"
$is-tablet: "only screen and (max-width : 1350px)"
$is-desktop: "only screen and (min-width : 1350px)"

.scene-edit-nav
  position: fixed
  display: none
  font-size: 0.7rem
  background: #191919
  width: 100vw
  z-index: 11
  @media #{$is-mobile}
    display: grid
    z-index: 10
    margin-top: 56px
    padding: 5px 10px

.scene-edit-nav-grid
  width: 100%
  @media #{$is-mobile}
    display: grid
    grid-template-columns: 100%
    grid-column-gap: 20px
    grid-row-gap: 20px
    padding: 10px 12px

.scene-edit-nav-item,.scene-edit-nav-close,.scene-edit-nav-add
  list-style: none
  display: grid

.scene-edit-nav-item
  grid-template-columns: 1fr 4fr
  grid-gap: 7px
  .v-btn
    height: 30px

.scene-edit-nav a
  color: #fff
  @media #{$is-mobile}
    z-index: 100
</style>
