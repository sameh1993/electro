<script>
import headerComponent from "./components/header/header.vue"
import { RouterView } from "vue-router"

export default {
  components: {
    headerComponent
  }
}
</script>


<template>
    <div class="hfeed site" id="page">

      <!-- start header component -->
      <header-component />


      <router-view />
    </div>
</template>


