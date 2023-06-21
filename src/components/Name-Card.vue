<template>
  <v-card flat outlined elevation="7" class="d-inline-flex">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="auto"
        class="mr-5 ml-5 bg-primary d-flex align-center"
      >
        <div class="center">
          <h2
            class="text-h4 font-weight-bold mb-2"
            :class="{ 'mt-4': $vuetify.breakpoint.smAndDown }"
          >
            {{ details.name }}
          </h2>
          <p class="text-subtitle-1 mb-1">
            {{ details.university }}
          </p>
          <p class="text-subtitle-2 mb-3">{{ details.major }}</p>
          <v-responsive :aspect-ratio="2 / 1" class="d-flex d-sm-none">
            <v-img
              :src="require('@/assets/uc-seal-2.gif')"
              :width="originalWidth * 0.75"
              :height="originalHeight * 0.75"
            ></v-img>
          </v-responsive>
          <v-btn
            rounded
            color="#93c02d"
            :href="details.resumeLink"
            class="mt-5 font-weight-black text-uppercase"
            :class="{ 'mb-4': $vuetify.breakpoint.smAndDown }"
            download
            >Download Resume</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" sm="auto" class="">
        <v-img
          height="300"
          width="250"
          :src="profileImg"
          class="rounded-img d-none d-sm-block"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import details from '@/assets/details.js'

export default {
  name: "NameCard",
  computed: {
    profileImg() {
      return require('@/assets/' + details.profileFileName);
    }
  },
  data() {
    return {
      loaded: false,
      originalWidth: 171, 
      originalHeight: 178, 
      details
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 100);
  },
};
</script>
