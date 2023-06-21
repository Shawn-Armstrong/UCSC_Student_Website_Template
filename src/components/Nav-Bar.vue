<template>
  <v-app-bar app color="secondary" dark>
    <v-spacer></v-spacer>
    <v-btn
      v-show="$route.path != '/'"
      to="/"
      color="#006aad"
      dark
      v-bind="attrs"
      v-on="on"
      width="150"
    >
      <v-icon>mdi-home</v-icon>
      <span class="ml-2">Home</span>
    </v-btn>
    <v-btn color="primary" text> </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- 
<v-spacer></v-spacer>
<v-spacer></v-spacer>
<v-menu offset-y>
  <template v-slot:activator="{ on, attrs }">
    <v-btn
      v-show="$route.path != '/'"
      color="primary"
      dark
      v-bind="attrs"
      v-on="on"
      width="400"
      class="mr-16"
    >
      <b>Essential Subjects</b>
    </v-btn>
  </template>
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :to="item.route"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-menu>
<v-spacer></v-spacer>
<v-btn v-show="$route.path != '/'" to="/" text>
  <span class="mr-2">Home</span>
  <v-icon>mdi-home</v-icon>
</v-btn>

<v-btn v-show="$route.path != '/'" to="/DevelopersView" text>
  <span class="mr-2">The Developers</span>
  <v-icon>mdi-account-group</v-icon>
</v-btn> -->
