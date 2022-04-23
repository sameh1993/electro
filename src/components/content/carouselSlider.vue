
<script>
export default {
  setup() {},
  Mounted() {
    // set the date we're counting down to
    var deal_end_date = document.querySelector(".deal-end-date").textContent;
    var target_date = new Date(deal_end_date).getTime();

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag element
    var countdown = document.getElementById("deal-countdown");

    // update the tag with id "countdown" every 1 second
    setInterval(function () {
      // find the amount of "seconds" between now and target
      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;

      // do some time calculations
      days = parseInt(seconds_left / 86400);
      seconds_left = seconds_left % 86400;

      hours = parseInt(seconds_left / 3600);
      seconds_left = seconds_left % 3600;

      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);

      // format countdown string + set tag value
      countdown.innerHTML =
        '<span data-value="' +
        days +
        '" class="days"><span class="value">' +
        days +
        '</span><b>Days</b></span><span class="hours"><span class="value">' +
        hours +
        '</span><b>Hours</b></span><span class="minutes"><span class="value">' +
        minutes +
        '</span><b>Mins</b></span><span class="seconds"><span class="value">' +
        seconds +
        "</span><b>Secs</b></span>";
    }, 1000);
  },
};
</script>


<template>
  <div class="slider">
    <div class="home-v1-slider">
      <!-- ========================================== SECTION – HERO : END========================================= -->

      <div id="owl-main" class="owl-carousel owl-inner-nav owl-ui-sm">
        <div
          class="item"
          style="background-image: url(@/assets/images/slider/banner-2.jpg)"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-offset-3 col-md-5">
                <div class="caption vertical-center text-left">
                  <div class="hero-1 fadeInDown-1">
                    The New <br />
                    Standard
                  </div>

                  <div class="hero-subtitle fadeInDown-2">
                    under favorable smartwatches
                  </div>
                  <div class="hero-v2-price fadeInDown-3">
                    from <br /><span>$749</span>
                  </div>
                  <div class="hero-action-btn fadeInDown-4">
                    <a href="single-product.html" class="big le-button"
                      >Start Buying</a
                    >
                  </div>
                </div>
                <!-- /.caption -->
              </div>
            </div>
          </div>
          <!-- /.container -->
        </div>
        <!-- /.item -->

        <div
          class="item"
          style="background-image: url(@/assets/images/slider/banner-1.jpg)"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-offset-3 col-md-5">
                <div class="caption vertical-center text-left">
                  <div class="hero-subtitle-v2 fadeInDown-1">
                    shop to get what you loves
                  </div>

                  <div class="hero-2 fadeInDown-2">
                    Timepieces that make a statement up to
                    <strong>40% Off</strong>
                  </div>

                  <div class="hero-action-btn fadeInDown-3">
                    <a href="single-product.html" class="big le-button"
                      >Start Buying</a
                    >
                  </div>
                </div>
                <!-- /.caption -->
              </div>
            </div>
          </div>
          <!-- /.container -->
        </div>
        <!-- /.item -->

        <div
          class="item"
          style="background-image: url(@/assets/images/slider/banner-3.jpg)"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-offset-3 col-md-5">
                <div class="caption vertical-center text-left">
                  <div class="hero-subtitle-v2 fadeInLeft-1">
                    shop to get what you loves
                  </div>

                  <div class="hero-2 fadeInRight-1">
                    Timepieces that make a statement up to
                    <strong>40% Off</strong>
                  </div>

                  <div class="hero-action-btn fadeInLeft-2">
                    <a href="single-product.html" class="big le-button"
                      >Start Buying</a
                    >
                  </div>
                </div>
                <!-- /.caption -->
              </div>
            </div>
          </div>
          <!-- /.container -->
        </div>
        <!-- /.item -->
      </div>
      <!-- /.owl-carousel -->

      <!-- ========================================= SECTION – HERO : END ========================================= -->
    </div>
    <!-- #content -->
  </div>
</template>