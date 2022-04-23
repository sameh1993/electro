<script>
import footerWidgets from "./footer-widgets.vue"
import footerNewsletter from "./footer-newsletter.vue"
import footerBottomWidgets from "./footer-bottom-widgets.vue"
import copyrightBar from "./copyright-bar.vue"

export default {
    setup() {
        
    },
    components: {
        footerWidgets,
        footerNewsletter,
        footerBottomWidgets,
        copyrightBar
    }
}
</script>


<template>
    <div class="site-footer" id="colophon">

        <!-- start footer widgets -->
        <footer-widgets />

        <!-- start newsletter -->
        <footerNewsletter />

        <!-- start footer Bottom widgets -->
        <footer-bottom-widgets />

        <!-- start copy right  bar-->
        <copyrightBar />
    </div>
</template>