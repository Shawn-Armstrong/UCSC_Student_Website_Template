<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="grey lighten-5 my-5" width="600" elevation="5" shaped>
          <v-card-title class="pa-4 text-h4 font-weight-bold"
            >Who am I?</v-card-title
          >
          <v-card-text class="px-4" style="line-height: 1.6">
            Lorem ipsum dolor sit amet,
            <strong style="color: #006aad">software engineer</strong> Metus
            aliquam eleifend mi in nulla posuere sollicitudin. <br /><br />
            Arcu vitae elementum curabitur vitae nunc sed velit. Quis auctor
            elit sed vulputate mi sit.
            <strong style="color: #006aad">United States Marine Corps</strong>,
            Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.
            Blandit cursus risus at ultrices mi tempus imperdiet nulla
            malesuada. Nec dui nunc mattis enim ut tellus elementum sagittis.
            Est sit amet facilisis magna etiam tempor orci eu. Dolor morbi non
            arcu risus. Viverra accumsan in nisl nisi. Sed vulputate mi sit amet
            mauris commodo quis. Consequat ac felis donec et odio pellentesque
            diam. Nulla malesuada pellentesque elit eget gravida cum sociis
            natoque. Egestas tellus rutrum tellus pellentesque eu tincidunt.
            Elementum integer enim neque volutpat. Eu facilisis sed odio morbi.
            Rhoncus mattis rhoncus urna neque viverra justo. <br /><br />
            Adipiscing vitae proin sagittis
            <strong style="color: #006aad"
              >University of California, Santa Cruz</strong
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dui
            vivamus arcu felis bibendum. Adipiscing vitae proin sagittis nisl
            rhoncus mattis rhoncus. Tincidunt praesent semper feugiat nibh sed
            pulvinar proin. Pharetra sit amet aliquam id. Nisl suscipit
            adipiscing bibendum est ultricies. Eget est lorem ipsum dolor sit
            amet. Lacus viverra vitae congue eu consequat ac. Cursus euismod
            quis viverra nibh. Donec adipiscing tristique risus nec feugiat in.
            Ullamcorper malesuada proin libero nunc consequat interdum varius
            sit. Odio tempor orci dapibus ultrices in iaculis nunc sed augue.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="pa-3 justify-center">
            <v-btn text color="primary" :href="gitHubLink" target="_blank"
              >My Projects</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <video-background
          :src="require(`@/assets/aboutVideo.mp4`)"
          style="
            max-height: 650px;
            height: 700vh;
            width: 490vh;
            max-width: 500px;
          "
        >
        </video-background>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import details from "@/assets/details.js";

export default {
  name: "AboutView",
  computed: {
    gitHubLink() {
      return details.gitHubLink;
    },
  },
};
</script>