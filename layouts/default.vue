<template>
  <div>
    <!-- start header -->
    <header>
      <!-- navigation bar -->
      <navbarComp class="fixed-top" />

      <!-- slider -->
      <sliderComp />
    </header>
    <!-- end header -->

    <nuxt />

    <h2>footer</h2>
  </div>
</template>

<script>
import navbarComp from "@/components/header/navbar.vue";
import sliderComp from "@/components/header/slider.vue";

export default {
  data() {},
  components: {
    navbarComp,
    sliderComp,
  },
};
</script>
