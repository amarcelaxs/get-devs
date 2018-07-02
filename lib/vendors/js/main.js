/*Author: Ana Marcela X. da Silva*/
/*data:29-06-18*/
/*contato:amarcelaxs@gmail.com*/

$(document).ready(function(){
/*carregamento dos produtos*/
 	$.ajax({
 	  url: 'data.json',
 	  dataType: "JSON",
 	  success: function(data) {
      $.each(data, function (key,json) {
        for (i in json) {
          $('.img-produto'+[i]).attr('src','layout/imagens/'+json[i].image);
          $('.title-produto'+[i]).html(json[i].produto);
          $('.valor-produto'+[i]).html(json[i].preco);
          var price = json[i].preco;
          var numero = price.replace(/[^\d]+/g,'');
          $('.produto').attr('data-preco', numero);
          $('.info'+[i]).html(json[i].frase);
          $('#oferta'+[i]).html(json[i].oferta);
          }
      });
   	}
 });

/*slide menu-mobile*/

var tam = $(window).width();

  if (tam <=768){
    $(".btn-order").click(function(){
     $(".menu-mobile").slideDown(500);
    });
    $(".close").click(function(){
     $(".menu-mobile").slideUp();
       $(".btn-order").removeClass("active");
    });

    $(".btn-filter").click(function(){
     $(".menu-mobile-filtro").slideDown(500);
    });
    $(".close").click(function(){
     $(".menu-mobile-filtro").slideUp();
       $(".btn-filter").removeClass("active");
    });


    /*filtro de cor*/
    $(".buttons-filtro-colors").css("display","none");
    $(".squaredOne").hide();
    $(".fa-window-minimize").css("display","none");
    $("#btn-cor").click(function(){
     $(".squaredOne").slideDown(500);
     $(".buttons-filtro-colors").css("display","block");
     $(".fa-plus").css("display","none");
     $(".fa-window-minimize").css("display","block");
     $(".close").show();
    });
    $(".close").click(function(){
      $(".squaredOne").slideUp();
      $(".btn-filter").removeClass("active");
    });

    /*filtro de tamanho*/
    $(".fa-window-minimize").css("display","none");
    $(".buttons-filtro-size").css("display","none");
    $(".list-size").hide();
    $("#size").click(function(){
     $(".list-size").slideDown(500); $(".close").show();
     $(".buttons-filtro-size").css("display","block");
     $(".fa-window-minimize").css("display","block");
     $(".fa-plus").css("display","none");
    });
    $(".close").click(function(){
      $(".list-size").slideUp();
      $(".btn-filter").removeClass("active");
    });

    /*filtre de preço*/
    $(".fa-window-minimize").css("display","none");
    $(".buttons-filtro-price").css("display","none");
    $(".priceOne").hide();
    $("#btn-preco").click(function(){
     $(".priceOne").slideDown(500); $(".close").show();
     $(".buttons-filtro-price").css("display","block");
     $(".fa-window-minimize").css("display","block");
     $(".fa-plus").css("display","none");
    });
    $(".close").click(function(){
      $(".priceOne").slideUp();
      $(".btn-filter").removeClass("active");
    });

  }else{
     $(".menu-mobile").hide();
   }


/*crição do lightbox*/

$('.btn-lightbox').click(function(){
	$('.background, .box-carrinho').animate({'opacity':'.60'},500,'linear');
	$('.box-carrinho').animate({'opacity':'1.00'},500,'linear');
	$('.background, .box-carrinho').css("display","block");
})
$('.btn-close').click(function(){
	$('.background, .box-carrinho').animate({'opacity':'0'},500,'linear',function(){
		$('.background,.box-carrinho').css('display','none');
	})
})
$('.background').click(function(){
	$('.background, .box-carrinho').animate({'opacity':'0'},500,'linear',function(){
		$('.background,.box-carrinho').css('display','none');
	})
})
});


/*botao carregar mais*/

$(function () {
  num_posts_show = 1;
  speed_to_top = 1000; // in ms
    $(".item").slice(0, num_posts_show).show();
    $("#loadmore").on('click', function (e) {
        e.preventDefault();
        $(".item:hidden").slice(0, num_posts_show).slideDown();
        if ($(".item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('.produtos').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

/*carrinho de compras*/

$('#carrinho, #total, #finalizar, #limpar').hide();
// Colocando produto no carrinho.
$('.produto').on('click', function(){
    $('.car').hide();
     $('Carrinho vazio').text();
    $('#carrinho-vazio').remove();
    $('#carrinho, #total, #finalizar, #limpar').show();
    var produto = $(this).clone().addClass('remove').hide().fadeIn(500);
    $('#itens').append(produto);
    var total = 0;
    var number = 0;
    var precos = $('#itens img  ');
    $(precos).each(function( index, value ) {
        total = total + parseFloat($(this).attr('data-preco'));
        $('#total').text('R$ '+total.toFixed(2));
         number = parseFloat($(this).attr('data-preco'));
        $('#total').append(total);
    });
});

// Retirando todos os produtos do carrinho.
$(document).on('click', '#limpar', function(){
    $('#itens').empty();
    //$('#carrinho').append("<div class='alert alert-danger' id='carrinho-vazio' role='alert'>Carrinho Vazio</div>").fadeOut(2000);
    $('#total, #finalizar, #limpar').hide();
    $('.car').show();
    $('.remove-produto').hide();
    var count = 0;
    $('#qtd').text(count);
});

// Retirando um produto do carrinho.
$(document).on('click', '.remove', function(){
    $(this).remove();
     count = count - 1;
     var total = 0;
     var number = 0;
     var resultado = 0;
     var precos = $('#itens img ');
     $('#qtd').text(count+' Produtos ');
     $(precos).each(function( index, value ) {
         total = total + ( parseFloat($(this).attr('data-preco')));
         resultado = total - parseFloat($(this).attr('data-preco'));
         $('#total').text('R$ '+resultado.toFixed(2));
          number = parseFloat($(this).attr('data-preco'));
         $('#total').append(resultado);
     });
});


/*colocando produto no carrinho*/
$('.comprar').on('click', function(){
    // $('').text();
    $('#carrinho-vazio').remove();
    $('#qtd').show();
    var produto = $(this).clone().addClass('remove').hide().fadeIn(500);
    $('#itens').append(produto);
    var total = 0;
    var count = 0;
   var  count = count + 1;
    var precos = $('#itens img');
    $('#qtd').text(count+' Produtos ');

});

/*$('#qtd').hide();*/
    var  count  = 0 ;
// Colocando produto no carrinho.
$('.produto').on('click', function(){
    $('#qtd').show();
    var produto =
     count =  count + 1;
     $('#qtd').text(count+' Produtos ');
});
