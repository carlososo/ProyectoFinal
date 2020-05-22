$(document).ready(function() {
    $("#modal-edad").modal('toggle');

    $("#btn-aguaanti").click(function() {
        $('#ModalCentro').modal();
        $('#Modal-inner-title').html("Aguardiente Antioqueño");
        $('#Modal-inner-text').html("Licor seco obtenido con alcohol Extrapuro a partir de los derivados de la (melaza, miel virgen y azucar), con su sabor tradicional de la esencia de anís");
    });
    $("#btn-aguaantidos").click(function() {
        $('#ModalCentro').modal();
        $('#Modal-inner-title').html("Nectar");
        $('#Modal-inner-text').html("A partir del primer sorbo y durante todo el camino por la boca hasta el final, el protagonista es el delicioso anís.");
    });
    $("#btn-mezcaluno").click(function() {
        $('#ModalCentro').modal();
        $('#Modal-inner-title').html("Don Juan Escobar");
        $('#Modal-inner-text').html("El Mezcal no es un gusto, si no un placer");
    });
    $("#btn-mezcaldos").click(function() {
        $('#ModalCentro').modal();
        $('#Modal-inner-title').html("El secreto de Oaxaca");
        $('#Modal-inner-text').html("Algunas personas dicen que encontrar un buen mezcal es como encontrar el amor, difícil pero no imposible.");
    });
    $("#btn-ronuno").click(function() {
        $('#ModalCentro').modal('toggle');
        $('#Modal-inner-title').html("Ron Medellin");
        $('#Modal-inner-text').html("Un trago lleno de momentos y recuerdos. Nuestro sabor ha ganado importantes concursos internacionales y seguimos trabajando para garantizar la calidad que nos caracteriza.");
    });
    $("#btn-rondos").click(function() {
        $('#ModalCentro').modal('toggle');
        $('#Modal-inner-title').html("Ron Viejo de Caldas");
        $('#Modal-inner-text').html("El sabor noble y puro de este ron extra añejo, es uno de los mas apetecidos por los excelsos catadores,con bouquet madura maravillosamente complejo, armonioso y redondo");
    });
    $("#btn-whiskeyuno").click(function() {
        $('#ModalCentro').modal('toggle');
        $('#Modal-inner-title').html("Ballentines");
        $('#Modal-inner-text').html("Su color dorado claro y su sabor inconfundible provienen de una compleja mezcla de whiskies. Notas de chocolate con leche, manzana roja y vainilla nos deja un final sofisticado con una sensación de frescura.");
    });
    $("#btn-whiskeydos").click(function() {
        $('#ModalCentro').modal('toggle');
        $('#Modal-inner-title').html("Buchanan's");
        $('#Modal-inner-text').html("El clásico desde hace más de 130 años, es un whisky de 12 años de añejamiento que se ha convertido en la referencia del whisky en México y Latinoamérica.");
    });

});