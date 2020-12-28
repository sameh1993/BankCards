<template>
  <b-navbar toggleable="lg" type="dark" class="bg-info">
    <div class="container">
      <NuxtLink to="/" class="text-capitalize text-white">
        <i class="fa fa-cc-visa"></i>
        back cards
      </NuxtLink>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <div class="nav-item" v-for="link in NavList">
            <NuxtLink class="nav-link text-white" :to="link.to">
              {{ link.title }}
            </NuxtLink>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      NavList: [
        {
          to: "/",
          title: "Home",
        },
        {
          to: "/aboutUs",
          title: "About",
        },
        {
          to: "/serivces",
          title: "Serivces",
        },
        {
          to: "/content",
          title: "Content",
        },
      ],
    };
  },
};
</script>
