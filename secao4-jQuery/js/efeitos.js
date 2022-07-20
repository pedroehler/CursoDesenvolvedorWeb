$(document).ready(() => {
    // transição de estilos do título do banner
    // quando passar o mouse pelo logotipo
    $("#logotipo").on("mouseover", function(){
        console.log("#logotipo mouseover");
        $("#banner h1").addClass("efeito-in");
        // let documentoHtml = $(document)[0];
        // console.log(documentoHtml);
        // $("#banner h1").css({"color":"red", "font-size":"12em", "transition":"1s"});
    }).on("mouseout", function(){
        console.log("#logotipo mouseout");
        $("#banner h1").removeClass("efeito-in");
    });
    // estilo da caixa de pesquisa
    $("#input-search").on("focus", function(){
        // quando entrar no foco
        $("li.search").addClass("ativo");
    }).on("blur", function(){
        // quando perder o foco
        $("li.search").removeClass("ativo");
        // limpa o campo
        $("#input-search").val("");
    });
    $(".thumbnails").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:["Anterior","Próximo"],
        responsive:{
            0:{items:0},
            480:{items:3},
            768:{items:4},
            1200:{items:6},
        }
    });
    let owl = $(".thumbnails").data("owlCarousel");
    $("#btn-news-prev").on("click", function(){
        owl.prev();
    });
    $("#btn-news-next").on("click", function(){
        owl.next();
    });
});