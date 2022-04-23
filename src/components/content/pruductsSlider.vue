<script>
import { RouterLink }  from "vue-router"
import $ from "jquery"

import featuredProducts from "@/components/content/products/featured-products.vue"
import onSaleProducts from "@/components/content/products/onSale-products.vue";
import topRaledProducts from "@/components/content/products/top-raled-products.vue"

export default {
    data(){
      return {
        status:"featured"
      }
    },
    components: {
      featuredProducts,
      onSaleProducts,
      topRaledProducts
    },
    mounted(){
      $(".products-carousel-tabs .nav-inline .nav-item").click(function () {
        this.status = $(this).attr('data-status')
        $(this).addClass("active").siblings("li").removeClass("active")
        console.log(this.status)
      })
    }
}
</script>


<template>
  <div class="products">
    <div class="container">
        <div
    class="
      home-v1-deals-and-tabs
      deals-and-tabs
      row
      animate-in-view
      fadeIn
      animated
    "
    data-animation="fadeIn"
  >
    <div class="deals-block col-lg-4">
      <section class="section-onsale-product">
        <header>
          <h2 class="h1">Special Offer</h2>
          <div class="savings">
            <span class="savings-text"
              >Save <span class="amount">$20.00</span></span
            >
          </div>
        </header>
        <!-- /header -->

        <div class="onsale-products">
          <div class="onsale-product">
            <a href="shop.html">
              <div class="product-thumbnail">
                <img
                  class="wp-post-image"
                  src="@/assets/images/onsale-product.jpg"
                  alt=""
                />
              </div>

              <h3>Game Console Controller <br />+ USB 3.0 Cable</h3>
            </a>

            <span class="price">
              <span class="electro-price">
                <ins><span class="amount">$79.00</span></ins>
                <del><span class="amount">$99.00</span></del>
              </span> </span
            ><!-- /.price -->

            <div class="deal-progress">
              <div class="deal-stock">
                <span class="stock-sold">Already Sold: <strong>2</strong></span>
                <span class="stock-available"
                  >Available: <strong>26</strong></span
                >
              </div>

              <div class="progress">
                <span class="progress-bar" style="width: 8%">8</span>
              </div>
            </div>
            <!-- /.deal-progress -->

            <div class="deal-countdown-timer">
              <div class="marketing-text text-xs-center">
                Hurry Up! Offer ends in:
              </div>

              <div id="deal-countdown" class="countdown">
                <span data-value="-1938" class="days"
                  ><span class="value">-1938</span><b>Days</b></span
                ><span class="hours"
                  ><span class="value">-20</span><b>Hours</b></span
                ><span class="minutes"
                  ><span class="value">-41</span><b>Mins</b></span
                ><span class="seconds"
                  ><span class="value">-30</span><b>Secs</b></span
                >
              </div>
              <span class="deal-end-date" style="display: none"
                >2016-12-31</span
              >

            </div>
            <!-- /.deal-countdown-timer -->
          </div>
          <!-- /.onsale-product -->
        </div>
        <!-- /.onsale-products -->
      </section>
      <!-- /.section-onsale-product -->
    </div>
    <!-- /.col -->

    <div class="tabs-block col-lg-8">
      <div class="products-carousel-tabs">
        <ul class="nav nav-inline">
          <li data-status="featured" class="nav-item active">
            featured
          </li>
          <li data-status="sale" class="nav-item">
            on sale
          </li>
          <li data-status="raled" class="nav-item">
              top rated
          </li>
        </ul>

        <div class="component">
          <featuredProducts v-if="status == 'featured' " />

          <onSaleProducts v-if="status == 'sale' "  />

          <topRaledProducts v-if="status == 'raled' " />
        </div>
      </div>
    </div>
    <!-- /.tabs-block -->
  </div>
    </div>
  </div>
</template>

<style scoped>

.products-carousel-tabs .nav-inline {
  display:flex;
  justify-content : center;
}
.products-carousel-tabs .nav-inline .nav-item {
  margin: 0 ;
  padding:13px;
  text-transform: capitalize;
    color: #333e48;
    font-size: 1.429em;
    line-height: 0.9em;
    padding-bottom: 1em;
}

.products-carousel-tabs .nav-inline .nav-item.active {
      font-weight: bold;
      position: relative;
      border-bottom: 2px solid #fed700;
}

.products-carousel-tabs .nav-inline .nav-item + .nav-item {
  margin-left: 0;
}
</style>