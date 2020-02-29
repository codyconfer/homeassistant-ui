<template><div>light</div></template>

<script lang="ts">
import Vue from 'vue';
import { Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { namespace as displayNamespace } from '../store/display/index';

@Component
export default class Light extends Vue {}
</script>
