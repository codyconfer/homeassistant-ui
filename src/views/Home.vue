<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <Default></Default>
        <Light></Light>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import Default from '../components/Default.vue';
import Light from '../components/Light.vue';

@Component({
  components: {
    Default,
    Light,
  },
})
export default class Home extends Vue {
  // @State('profile') private profile: ProfileState;
  // @Action('fetchData', { namespace }) private fetchData: any;
  // @Getter('fullName', { namespace }) private fullName: string;
}
</script>
