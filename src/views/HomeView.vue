<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col class="my-4" cols="12" align="center">
        <SecondaryIcon 
          v-for="icon in icons" 
          :key="icon.name"
          :icon="icon"
        />
      </v-col>
      <v-col cols="12" align="center" class="pt-2">
        <v-slide-x-transition>
          <NameCard class="mb-10"></NameCard>
        </v-slide-x-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import details from "@/assets/details";
import NameCard from "@/components/Name-Card.vue";
import SecondaryIcon from "@/components/SecondaryIcon.vue";
export default {
  name: "HomeView",
  components: { NameCard, SecondaryIcon },
  data() {
    return {
      icons: [
        {
          name: 'Github',
          href: details.gitHubLink,
          target: "_blank",
          icon: ['fab', 'github']
        },
        {
          name: 'LinkedIn',
          href: details.linkedInLink,
          target: "_blank",
          icon: ['fab', 'linkedin']
        },
        {
          name: 'About Me',
          to: '/AboutView',
          icon: ['fas', 'circle-user']
        },
        {
          name: 'Documents',
          to: '/DocumentView',
          icon: ['fas', 'file-alt']
        },
      ]
    }
  }
};
</script>
