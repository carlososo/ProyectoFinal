$(document).ready(function() {
    $("#modal-edad").modal('toggle');

    $("#btn-aguaanti").click(function() {
        $('#ModalCentro').modal();
        $('#Modal-inner-title').html("Titulo1");
        $('#Modal-inner-text').html("Texto 1");
    });
    $("#btn-aguaantidos").click(function() {
        $('#ModalCentro').modal();
        $('#Modal-inner-title').html("Titulo 2");
        $('#Modal-inner-text').html("Nuevo Texto 2");
    });
    $("#btn-mezcaluno").click(function() {
        $('#ModalCentro').modal();
        $('#Modal-inner-title').html("Titulo3");
        $('#Modal-inner-text').html("Texto 3");
    });
    $("#btn-mezcaldos").click(function() {
        $('#ModalCentro').modal();
        $('#Modal-inner-title').html("Titulo 4");
        $('#Modal-inner-text').html("Nuevo Texto 4");
    });
    $("#btn-ronuno").click(function() {
        $('#ModalCentro').modal('toggle');
        $('#Modal-inner-title').html("Titulo 5");
        $('#Modal-inner-text').html("Texto 5");
    });
    $("#btn-rondos").click(function() {
        $('#ModalCentro').modal('toggle');
        $('#Modal-inner-title').html("Titulo 6");
        $('#Modal-inner-text').html("Nuevo Texto 6");
    });
    $("#btn-whiskeyuno").click(function() {
        $('#ModalCentro').modal('toggle');
        $('#Modal-inner-title').html("Titulo 7");
        $('#Modal-inner-text').html("Texto 7");
    });
    $("#btn-whiskeydos").click(function() {
        $('#ModalCentro').modal('toggle');
        $('#Modal-inner-title').html("Titulo 8");
        $('#Modal-inner-text').html("Nuevo Texto 8");
    });

});