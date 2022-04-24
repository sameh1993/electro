<template>
    <div id="carouselExampleIndicators" class="carousel  slide" data-ride="carousel">
        <h4> الاخبار </h4>
        <div class="carousel-inner">
            <div class="carousel-item active">

                <img src="@/assets/images/products/1.jpg" class="d-block w-100" alt="...">
                <p> عروص جديده وحصومات - <span> Jan 4, 2022 </span> </p>
                <h5> خصم على الاشتراكات بمناسبة السنة الجديدة </h5>
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/products/2.jpg" class="d-block w-100" alt="...">
                <p> عروص جديده وحصومات - <span> Jan 4, 2022 </span> </p>
                <h5> خصم على الاشتراكات بمناسبة السنة الجديدة </h5>
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/products/3.jpg" class="d-block w-100" alt="...">
                <p> عروص جديده وحصومات - <span> Jan 4, 2022 </span> </p>
                <h5> خصم على الاشتراكات بمناسبة السنة الجديدة </h5>
            </div>
        </div>
        <div class="control">
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators"
                data-slide="prev">
                <i class="fa fa-angle-right"></i>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators"
                data-slide="next">
                <i class="fa fa-angle-left"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
#carouselExampleIndicators {
    position: relative;
    margin-bottom: 35px;
}

#carouselExampleIndicators h4 {
    margin-bottom: 0.5em;
    padding-bottom: 14px;
    border-bottom: 1px solid #aba6a6;
    font-family: 'cairo';
    font-size: 20px;
}

#carouselExampleIndicators img {
    margin: 0;
    width: 100%;
}

.carousel-item p {
    padding-top: 2px;
    margin-bottom: 3px;
}

.carousel-item h5 {
    font-size: 15px;
    font-weight: 600;
}

#carouselExampleIndicators .control {
    position: absolute;
    left: 5px;
    top: 5px;
}

#carouselExampleIndicators .control button {
    color: #333;
    background-color: transparent;
    z-index: 90;
    padding: 4px;
}

#carouselExampleIndicators .control button i {
    font-weight: 300;
    font-size: 21px;
}
</style>