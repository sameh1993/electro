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

import footterComponent from "@/components/footer/footer.vue"

export default defineComponent({
    components: {
    navbar,
    carouselSlider,
    shopSlider,
    PruductsSlider,
    Categories,
    bestSellers,
    recentlyAdd,
    brandProducts,
    footterComponent
}
})
</script>

<template>
  <div class="home"> 

            <!-- start navbar -->
      <navbar />


      <!-- start carousel slider -->
      <carouselSlider />

      <!-- start shop slider -->
      <shopSlider />

      <!-- start products slider -->
      <PruductsSlider />

      <!-- start catories -->
      <Categories />

      <!-- start best seller -->
      <bestSellers />

      <!-- start recently addd -->
      <recently-add />

      <!-- start brandProducts -->
      <brandProducts />

      <!-- start footer -->
      <footter-component />
  </div>
</template>