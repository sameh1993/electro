<script>
import headerComponent from "./components/header/header.vue"

import axios from "axios"

export default {
  components: {
    headerComponent
  },
  mounted() {
    // axios.get('https://www.d2020.net/last_version/api/user/slider').then(result => {
    //   console.log(result)
    // }).catch(err => {
    //   console.log(err)
    // })
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


