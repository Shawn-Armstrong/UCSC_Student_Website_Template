<template>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="icon-btn"
          :class="{
            'mx-6': $vuetify.breakpoint.xs,
            'mx-12': !$vuetify.breakpoint.xs,
          }"
          icon
          :to="icon.to"
          :href="icon.href"
          :target="icon.target"
          v-bind="attrs"
          v-on="on"
        >
          <font-awesome-icon
            :icon="icon.icon"
            :size="$vuetify.breakpoint.xs ? '3x' : '4x'"
            v-bind="attrs"
            v-on="on"
            :style="{ color: '#006aad' }"
          ></font-awesome-icon>
        </v-btn>
      </template>
      <span>{{ icon.name }}</span>
    </v-tooltip>
  </template>
  
  <script>
  export default {
    name: "SecondaryIcon",
    props: {
      icon: {
        type: Object,
        required: true
      }
    },
  };
  </script>
  