<script>
import { defineComponent } from "vue"
import navbar from "@/components/header/navbar.vue";
import carouselSlider from "@/components/content/carouselSlider.vue";
import shopSlider from "@/components/content/shopSlider.vue";
import PruductsSlider from "../components/content/pruductsSlider.vue";
import Categories from "../components/content/categories.vue";
import bestSellers from "../components/content/best-sellers.vue";
import recentlyAdd from "../components/content/recently-add.vue"
import brandProducts from "../components/content/brand-carousel.vue"
import productsSlider from "../components/content/test.vue"

import electroFeature from "../components/slide-bar/electro-feature.vue"
import widgetsAslide from "../components/slide-bar/widgets-aslide.vue"

import footterComponent from "@/components/footer/footer.vue"

import axios from "axios"

export default defineComponent({
  data(){
    return {
      sliders: []
    }
  },
  components: {
    navbar,
    carouselSlider,
    // shopSlider,
    Categories,
    bestSellers,
    recentlyAdd,
    productsSlider,
    brandProducts,
    electroFeature,
    widgetsAslide,
    footterComponent,

  },
  mounted() {
    axios.get("https://www.d2020.net/last_version/api/user/slider").then(result => {
      console.log(result.data.data, "here")
      this.sliders = result.data.data
    }).catch(err => {
      console.log(err)
    })
  }
})
</script>

<template>
  <div class="home">
    <!-- start navbar -->
    <navbar />

    <!-- start slider -->
    <carouselSlider :sliders="sliders" />

    <!-- start products slider -->

    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-12 col-xs-12 xs-text-center">
            <img class="fluid-img" src="../assets/app1.png">

            <electroFeature />

            <widgets-aslide />

          </div>
          <div class="left col-md-9 col-sm-12 col-xs-12">

            <productsSlider />

            <Categories />

          </div>
        </div>
      </div>
    </div>

    <!-- start catories -->

    <!-- start best seller -->
    <!-- <bestSellers /> -->

    <!-- start recently addd -->
    <!-- <recently-add /> -->

    <!-- start brandProducts -->
    <!-- <brandProducts /> -->

    <!-- start footer -->
    <footter-component />
  </div>
</template>

<style scoped>
@media (min-width: 767px) {
  #content {
    margin-right: 28.333%;
    margin-bottom: 50px;
  }

  .content img {
    margin-top: 244px;
    max-width: 102%;
  }
}
</style>