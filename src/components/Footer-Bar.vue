<template>
  <v-footer app bottom fixed style="width: 100%" padless color="secondary" hide-on-scroll>
    <v-row justify="center" no-gutters>
      <v-col class="#003c6c lighten-2 py-2 text-right white--text" cols="12">
        <v-card-text class="py-2 pa-2 white--text text-center">
          Copyright © {{ new Date().getFullYear() }} —
          <strong><a href="https://www.linkedin.com/groups/13961967/" target="_blank" class="white--text">UCSC CSE LinkedIn Group</a></strong>,  All Rights Reserved
        </v-card-text>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>
