<script setup>
    import { onMounted } from "vue"
    import $ from "jquery"

    onMounted(function () {
        $(".handheld-navigation ul li a").click(function () {
            $(".handheld-navigation").css("right", "-80%")
            $(".ehm-close").trigger()
        })
    })
</script>

<template>
<header id="masthead" class="site-header header-v2">
    <div class="container hidden-md-down">
        <div class="row">

            <!-- ============================================================= Header Logo ============================================================= -->
            <div class="header-logo">
                <a href="https://www.d2020.net/last_version" class="header-logo-link">
                    <img src="https://www.d2020.net/last_version/backend/app-assets/images/ico/logo.png" alt="logo" style="height:58px;">

                </a>
            </div>
            <!-- ============================================================= Header Logo : End============================================================= -->

            <div class="primary-nav animate-dropdown">
                <div class="clearfix">
                    <button class="navbar-toggler hidden-sm-up pull-right flip" type="button" data-toggle="collapse" data-target="#default-header">
                        ☰
                    </button>
                </div>

                <div class="collapse navbar-toggleable-xs" id="default-header">
                    <nav>
                        <ul id="menu-main-menu" class="nav nav-inline yamm">
                            <li class="menu-item "><router-link title="Home" to="/">الرئيسية</router-link></li>
                            <li class="menu-item "><router-link title="premium" to="/premium">المتميزون </router-link></li>
                            <li class="menu-item "><router-link title="categories" to="/categories">التصنيفات </router-link></li>
                            <li class="menu-item"><router-link title="Features" to="/map">الخريطة </router-link></li>

                            <li class="menu-item "><router-link title="About Us" to="/about">من نحن</router-link></li>
                            <li class="menu-item"><router-link title="Contact Us" to="/contact">اتصل بنا</router-link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="header-support-info">
                <div class="media">
                    <span class="media-left support-icon media-middle"><i class="ec ec-support"></i></span>
                    <div class="media-body">
                        <span class="support-number"><strong>Support : </strong> 0126059755</span><br>
                        <span class="support-email">Email: info@d2020.net</span>
                    </div>
                </div>
            </div>

        </div><!-- /.row -->
    </div>

    <div class="container hidden-lg-up">
        <div class="handheld-header">

            <!-- ============================================================= Header Logo ============================================================= -->
            <div class="header-logo">
                <a href="https://www.d2020.net/last_version" class="header-logo-link">
                    <img src="https://www.d2020.net/last_version/backend/app-assets/images/ico/logo.png" alt="logo" style="height:58px;">
                </a>
            </div>
            <!-- ============================================================= Header Logo : End============================================================= -->

            <div class="handheld-navigation-wrapper">
                <div class="handheld-navbar-toggle-buttons clearfix">
                    <button class="navbar-toggler navbar-toggle-hamburger hidden-lg-up pull-right flip" type="button">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <button class="navbar-toggler navbar-toggle-close hidden-lg-up pull-right flip" type="button">
                        <i class="ec ec-close-remove"></i>
                    </button>
                </div>
                <div class="handheld-navigation hidden-lg-up" id="default-hh-header">
                    <span class="ehm-close">Close</span>
                    <ul id="menu-all-departments-menu-1" class="nav nav-inline yamm">
                        <li class="highlight menu-item animate-dropdown ">
                            <router-link title="Home" to="/">الرئيسية</router-link>
                        </li>
                        <li class="highlight menu-item animate-dropdown ">
                            <router-link title="premium" to="/premium">المتميزون </router-link>
                        </li>
                        <li class="highlight menu-item animate-dropdown ">
                            <router title="categories" to="/categories">التصنيفات </router>
                        </li>
                        <li class="highlight menu-item animate-dropdown ">
                            <router-link title="About Us" to="/about">من نحن</router-link>
                        </li>
                        <li class="highlight menu-item animate-dropdown ">
                            <router-link title="Features" to="/map">الخريطة </router-link>
                        </li>
                        <li class="highlight menu-item animate-dropdown ">
                            <router-link title="Contact Us" to="/contact">اتصل بنا</router-link>
                        </li>
                        <li class="highlight menu-item animate-dropdown ">
                            <router-link title="Login" to="/checklogin"> حسابى</router-link>
                        </li>
                        <li class="highlight menu-item animate-dropdown ">
                            <router-link title="Features" to="/privacy">سياسة الاستخدام</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</header>
  <!-- #masthead -->
</template>

<style scoped>
.navbar-search button {
  border-radius: 0 2.571em 2.571em 0;
}

.navbar-search > .input-group {
  width: 87%;
}

.navbar-search .form-control {
  height: 100%;
}


.navbar-search .search-categories > select {
      transform: translateX(-97px);
    position: absolute;
    z-index: 300;
    right: -86px;
    top: 12px;
}
</style>