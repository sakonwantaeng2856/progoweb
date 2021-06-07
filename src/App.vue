<template>
  <div id="app">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <navigation />
    <slide />
    <spot />
    <feaure />
    <pricing />
    <contact />
    <register />
    <footerA />
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/navigation.vue";
import spot from "@/components/spot.vue";
import slide from "@/components/slide.vue";
import feaure from "@/components/feaure.vue";
import pricing from "@/components/pricing.vue";
import contact from "@/components/contact.vue";
import footerA from "./components/footerA.vue";
import Register from "./components/register.vue";
export default {
  name: "Home",
  components: {
    navigation,
    spot,
    slide,
    feaure,
    pricing,
    contact,
    footerA,
    Register,
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  font-family: "Prompt", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 100%;
  line-height: 40px;
  text-align: center;
  color: #2c3e50;
}
</style>
