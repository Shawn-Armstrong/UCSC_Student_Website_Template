<template>
  <v-app>
    <NavBar></NavBar>

    <v-main>
      <transition name="disolve" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </v-main>

    <FooterBar></FooterBar>
  </v-app>
</template>

<script>
import FooterBar from "@/components/Footer-Bar.vue";
import NavBar from "@/components/Nav-Bar.vue";

export default {
  name: "App",
  icons: {
    iconfont: "md",
  },
  components: {
    FooterBar,
    NavBar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.disolve-enter-active {
  transition: opacity 0.5s ease;
}
.disolve-leave-active {
  transition: opacity 0.5s ease;
}
.disolve-enter, .disolve-leave-to
/* .disolve-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>