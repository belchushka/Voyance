const slidesToShow = window.innerWidth <= 1025 ? window.innerWidth <= 500 ? 2 : 4 : 6

$(".profilesSlider").each((num,el)=>{
    let element = $(el)
    element.slick({
        infinite: false,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        showButtons:false,
        appendArrows:$(element.parent()).children(".header").children(".controls")
    })
})

if (slidesToShow <=4){
    $(".ads").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
}else{
    $(".ads").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
    })
}



