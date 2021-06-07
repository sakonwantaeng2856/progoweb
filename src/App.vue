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

    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/views/Home.vue";

export default {
  name: "app",
  components: {
    Home,
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
