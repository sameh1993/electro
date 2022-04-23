<script>
import topbarComponent from "./topbar.vue"
import siteHeader from "./site-header.vue"

export default {
    components : {
        topbarComponent,
        siteHeader
    }
}
</script>

<template>
    <div class="header">

        <!-- start top bar -->
        <topbar-component />

        <!-- start site header -->
        <site-header />
    </div>
</template>
