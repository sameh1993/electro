<template>
<div class="footer-newsletter">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-7">
                    <h5 class="newsletter-title">اشترك معنا فى خدمة البريد</h5>
                    <span class="newsletter-marketing-text">... <strong>واحصل على عروضنا الدائمة</strong></span>
                </div>
                <div class="col-xs-12 col-sm-5">
                    <form>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="ادخل البريد الاليكترونى ">
                            <span class="input-group-btn">
                                            <button class="btn btn-secondary" type="button">اشترك</button>
                                        </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.footer-newsletter {
	margin-top: 70px;
}
.input-group {
	width: 76%;
}

.input-group .form-control:first-child {
	height: 50px;
}

@media(max-width: 767px) {
	

.footer-newsletter {
	height:340px;
}


	.input-group {
	width: 100%;
}
.footer-newsletter form {
	margin-top:30px;
}

.footer-newsletter .newsletter-title {
	margin-top:60px;
}

}


.input-group input {
	height: 100%;
}
</style>