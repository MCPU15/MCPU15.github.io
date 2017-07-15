function load(cedula, password) {

    var url = "validar_usuario.php"; // codigo donde se validará al usuario.
    $.ajax({
        type: "POST",
        url: url,
        data: {cedula: cedula, pass: password},
        beforeSend: function() {
            $("#validando").show();
            $("#boton").hide();
            $("#error").hide();
        },
        complete: function() {

        },
        success: function(data) {
            if (data == 'SI') {
                var url = "panel.php";
                $(location).attr('href', url);
            } 
            else {
                $("#validando").hide();
                $("#boton").show();
                $("#error").show();
                $("#error").html('<br><center><strong> ¡' + data + '! </strong></center>');
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//


function nuevoUsuario(cedula, password1, password2) {

    var url = "resgistroUsuario.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {cedula: cedula, pass1: password1, pass2: password2},
        beforeSend: function() {
            $("#validando2").show();
            $("#boton1").hide();
            $("#error2").hide();
        },
        complete: function() {
        },
        success: function(data) {
            if (data == "Por favor rellene todos los campos") {
                $("#validando2").hide();
                $("#boton1").show();
                $("#error2").show();
                $("#error2").html('<br><center><strong> ¡' + data + '! </strong></center>');
            } else {
                if (data == "Por favor ingrese una cédula valida") {
                    $("#validando2").hide();
                    $("#boton1").show();
                    $("#error2").show();
                    $("#error2").html('<br><center><strong> ¡' + data + '! </strong></center>');
                } else {
                    if (data == "Ya existe una cuenta con la cédula ingresa") {
                        $("#validando2").hide();
                        $("#boton1").show();
                        $("#error2").show();
                        $("#error2").html('<br><center><strong> ¡' + data + '! </strong></center>');

                    } else {
                        if (data == "Gracias por registrarte en el sistema Control de Pasantias") {
                            $("#cont_registro").hide();
                            $("#exito").show();
                            $("#exito").html('<br><center><strong> ¡' + data + '! </strong></center>' +
                                    '<br><center><a href="#login" data-toggle="modal" data-dismiss="modal" class="close1 btn btn-primary" class="btn btn-primary">Iniciar sesión</a></center>');
                        } else {
                            if (data == "Las contraseñas no coinciden") {
                                $("#validando2").hide();
                                $("#boton1").show();
                                $("#error2").show();
                                $("#error2").html('<br><center><strong> ¡' + data + '! </strong></center>');
                            }
                        }
                    }
                }

            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}


//--------------------------------------------------------------------------------------------------------------------------------------------------//


function validarDatos() {

    var url = "guardarDatos.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#formPasantias").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {

        },
        complete: function() {

        },
        success: function(data) {
            if (data == "true") {

                var url = "guardarDatos1.php"; // El script a dónde se realizará la petición.
                var registroDatos = $("#formPasantias").serialize();
                $.ajax({
                    type: "POST",
                    url: url,
                    data: registroDatos,
                    beforeSend: function() {

                    },
                    complete: function() {

                    },
                    success: function(data) {
                        $('#confirmacionDatos').modal('show');
                        $('#datosFormulario').html(data);
                    }
                });

            } 

            else {
                $('#mensajesForm').modal('show');
                $('#error').html("<center><p style='font-size: 16px;'>" + data + "</p></center>");
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}


//--------------------------------------------------------------------------------------------------------------------------------------------------//


function registrarDatos() {

    var url = "registrarDatos.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#formPasantias").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {
            $("#Bloquear").css("display", "block");
        },
        complete: function() {

        },
        success: function(data) {
            if (data == 'true') {
                window.location = "panel.php?var=pasante";
                $("#Bloquear").css("display", "none");
            } else {
                $('#mensajesForm').modal('show');
                $('#error').html("<center><p style='font-size: 16px;'>" + data + "</p></center>");
            }

        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}


//--------------------------------------------------------------------------------------------------------------------------------------------------//


function datosTA(tutor_acd_id) {

    var url = "obtenerDatosTA.php"; // El script a dónde se realizará la petición.

    $.getJSON(url, {tutor_acd_id: tutor_acd_id}, function(data) {
        $("#nombre_ta").val(data.nombre);
        $("#apellido_ta").val(data.apellido);
        $("#nacionalidad_ta").val(data.nacionalidad);
        $("#cedula_ta").val(data.cedula);
        $("#telf_ta").val(data.telefono);
        $("#email_ta").val(data.correo);
        $("#profesion_ta").val(data.profesion);

    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//


function datosTA1(tutor_acd_id) {

    var url = "obtenerDatosTA1.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {tutor_acd_id: tutor_acd_id},
        beforeSend: function() {
            $("#Bloquear").css("display", "block");
        },
        complete: function() {
        },
        success: function(data) {
            $("#dTA").html(data);
            $("#Bloquear").css("display", "none");
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}
//--------------------------------------------------------------------------------------------------------------------------------------------------//


function datosEM(empresa_id) {

    var url = "datosEM.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {empresa_id: empresa_id},
        beforeSend: function() {
            $("#Bloquear").css("display", "block");
        },
        complete: function() {
        },
        success: function(data) {
            $("#dEM").html(data);
            $("#Bloquear").css("display", "none");
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//


function eliminarEM(empresa_id) {

    var url = "eliminarEM.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {empresa_id: empresa_id},
        beforeSend: function() {
        },
        complete: function() {
        },
        success: function(data) {
            if (data == 'Eliminado Exitosamente') {
                window.location = "panel.php?var=empresas";
            } else {
                alert(data);
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}



//--------------------------------------------------------------------------------------------------------------------------------------------------//


function buscarPasante(pasante_id) {

    var url = "datosPS.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {pasante_id: pasante_id},
        beforeSend: function() {
            $("#Bloquear").css("display", "block");
        },
        complete: function() {
        },
        success: function(data) {
            $("#dPS").html(data);
            $("#Bloquear").css("display", "none");
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}


//--------------------------------------------------------------------------------------------------------------------------------------------------//


function obtenerMunicipio(estado) {

    var url = "obtenerDatosMunicipio.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {estado: estado},
        beforeSend: function() {
        },
        complete: function() {
        },
        success: function(data) {
            $("#municipio").html(data);
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//

function obtenerParroquia(municipio) {

    var url = "obtenerDatosParroquia.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {municipio: municipio},
        beforeSend: function() {
        },
        complete: function() {
        },
        success: function(data) {
            $("#empresa").val('');
            $("#direcion_empresa").val('');
            $("#rif_empresa").val('');
            $("#telf_empresa").val('');
            $("#tipo_empresa").val('');
            $("#parroquia").html(data);
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//


function obtenerEmpresa(parroquia) {

    var url = "obtenerDatosEmpresa.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {parroquia: parroquia},
        beforeSend: function() {
        },
        complete: function() {
        },
        success: function(data) {
            $("#empresa").val('');
            $("#direcion_empresa").val('');
            $("#rif_empresa").val('');
            $("#telf_empresa").val('');
            $("#tipo_empresa").val('');
            $("#empresa").html(data);
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//


function obtenerInfoEmpresa(empresa) {

    var url = "obtenerInfoEmpresa.php"; // El script a dónde se realizará la petición.
    $("#direcion_empresa").val('');
    $("#rif_empresa").val('');
    $("#telf_empresa").val('');
    $("#tipo_empresa").val('');

    $.getJSON(url, {empresa: empresa}, function(data) {
        $("#direcion_empresa").val(data.direccion);
        $("#rif_empresa").val(data.tipo_rif + "-" + data.rif);
        $("#telf_empresa").val("0" + data.telefono);
        $("#tipo_empresa").val(data.tipo_empresa);

    });

    return false; // Evitar ejecutar el submit del formulario. 
}


//--------------------------------------------------------------------------------------------------------------------------------------------------//


function soloNumeros(e)
{
    var nav4 = window.Event ? true : false;
    var key = nav4 ? e.which : e.keyCode
    return (key == 9 || key <= 13 || (key >= 48 && key <= 57));
}




//--------------------------------------------------------------------------------------------------------------------------------------------------//


function validarDatosPS() {

    var url = "validarDatosPS.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#formDatosPS").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {
            $("#Bloquear").css("display", "block");
        },
        complete: function() {

        },
        success: function(data) {
            if (data == "Guardado Exitosamente") {
                $('#confirmacion').modal('show');
                $("#Bloquear").css("display", "none");
            } else {
                $('#error').modal('show');
                $("#Bloquear").css("display", "none");
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//


function definitiva(nota_ins, nota_acd, nota_cpp) {

    $("#Bloquear").css("display", "block");

    var url = "definitiva.php"; // El script a dónde se realizará la petición.
    $.getJSON(url, {nota_ins: nota_ins, nota_acd: nota_acd, nota_cpp: nota_cpp}, function(data) {
        $("#nota_cien").val(data.nota_cien);
        $("#nota_final").val(data.nota_final);
        $("#Bloquear").css("display", "none");
    });

    return false; // Evitar ejecutar el submit del formulario. 
}


//--------------------------------------------------------------------------------------------------------------------------------------------------//


function nuevoTA() {

    var url = "nuevoTA.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#nuevoTA").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {
            $("#validando").show();
            $("#registrar").hide();
            $("#error2").hide();
        },
        complete: function() {

        },
        success: function(data) {
            if (data == "Guardado Exitosamente") {
                $("#nuevoTutor").css("display", "none");
                $('#confirmacion').modal('show');                
            } else {
                $("#validando").hide();
                $("#registrar").show();
                $("#error2").show();
                $("#error2").html('<br><center><strong> ¡' + data + '! </strong></center>');
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}




//--------------------------------------------------------------------------------------------------------------------------------------------------//


function validarDatosTA() {

    var url = "validarDatosTA.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#formDatosTA").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {
            $("#Bloquear").css("display", "block");
        },
        complete: function() {

        },
        success: function(data) {
            if (data == "Guardado Exitosamente") {
                $('#confirmacion').modal('show');
                $("#Bloquear").css("display", "none");
            } else {
                $("#Bloquear").css("display", "none");
                $('#error').modal('show');
                $("#error2").show();
                $('#error2').html('<br><center><strong> ¡' + data + '! </strong></center>');
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}




//--------------------------------------------------------------------------------------------------------------------------------------------------//


function nuevaEM() {

    var url = "nuevaEM.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#nuevaEM").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {
            $("#validando").show();
            $("#registrar").hide();
            $("#error2").hide();
        },
        complete: function() {

        },
        success: function(data) {
            if (data == "Guardado Exitosamente") {
                $("#registrar").hide();
                $("#nuevaEmpresa").hide();
                $('#confirmacion').modal('show');
                 
            } else {
                $("#validando").hide();
                $("#registrar").show();
                $("#error2").show();
                $("#error2").html('<br><center><strong> ¡' + data + '! </strong></center>');
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}



//--------------------------------------------------------------------------------------------------------------------------------------------------//

function validarDatosEM() {

    var url = "validarDatosEM.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#formDatosEM").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {
            $("#Bloquear").css("display", "block");
        },
        complete: function() {

        },
        success: function(data) {
            if (data == "Guardado Exitosamente") {
                $('#confirmacion').modal('show');
                $("#Bloquear").css("display", "none");
            } else {
                $('#error2').modal('show');
                $("#Bloquear").css("display", "none");
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}



//--------------------------------------------------------------------------------------------------------------------------------------------------//


function cambiarContraseña() {

    var url = "contrasena.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#camContrasena").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {
            $("#validando").show();
            $("#registrar").hide();
            $("#error2").hide();
        },
        complete: function() {

        },
        success: function(data) {
            if (data == "Se ha cambiado la contraseña exitosamente") {
                $('#error2').html('<br><center><strong> ¡' + data + '! </strong></center>');
                window.location.reload();
            } else {
                $("#validando").hide();
                $("#registrar").show();
                $("#error2").show();
                $("#error2").html('<br><center><strong> ¡' + data + '! </strong></center>');
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//

function datosCartaPostulacion() {

    var url = "validarDatosCP.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#formulariocp").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {
            $("#validandocp").show();
            $("#errorcp").hide();
        },
        complete: function() {
        },
        success: function(data) {
            if (data == "Por favor rellene todos los campos") {
                $("#validandocp").hide();
                $("#errorcp").show();
                $('#errorcp').html('<br><center><strong> ¡' + data + '! </strong></center>');
            } else {
                if (data == "Por favor ingrese una cédula valida") {
                    $("#validandocp").hide();
                    $("#errorcp").show();
                    $('#errorcp').html('<br><center><strong> ¡' + data + '! </strong></center>');
                } else {
                    $("#validandocp").hide();
                    var url = "blog_pdf/php/pdf/carta_postulacion.php";
                    $(location).attr('href', url);
                }
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//


function editarDatosPS() {

    var url = "editarDatosPS.php"; // El script a dónde se realizará la petición.
    var registroDatos = $("#fromEditarDatosPS").serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: registroDatos,
        beforeSend: function() {
            $("#Bloquear").css("display", "block");
        },
        complete: function() {

        },
        success: function(data) {
            if (data == "true") {
                $("#Bloquear").css("display", "none");
                $('#mensajesForm').modal('show');
                $('#error').html("<center><p style='font-size: 16px;'>¡Datos guardados exitosamente!</p></center>");
            } else {
                $("#Bloquear").css("display", "none");
                $('#mensajesForm').modal('show');
                $('#error').html("<center><p style='font-size: 16px;'>" + data + "</p></center>");
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}


//--------------------------------------------------------------------------------------------------------------------------------------------------//


function buscarDatosPasantes(pasante_id) {

    var url = "buscarDatosPasantes.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {pasante_id: pasante_id},
        beforeSend: function() {
            $("#Bloquear").css("display", "block");
        },
        complete: function() {
        },
        success: function(data) {
            $("#datosPasantes").html(data);
            $("#Bloquear").css("display", "none");
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//


function enviarCorreo(cedula) {

    var url = "recuperar_contrasena.php"; // El script a dónde se realizará la petición.
    $.ajax({
        type: "POST",
        url: url,
        data: {cedula: cedula},
        beforeSend: function() {
            $("#validando3").show();
            $("#boton3").hide();
            $("#error3").hide();
        },
        complete: function() {

        },
        success: function(data) {
            if (data == 1) {
                $("#validando3").hide();
                $("#boton3").show();
                $("#error3").show();
                $("#error3").html('<br><center><strong> ¡Ingrese su cédula! </strong></center>');
                
            } else {
                if (data == 2) {
                    $("#validando3").hide();
                    $("#boton3").show();
                    $("#error3").show();
                    $("#error3").html('<br><center><strong> ¡La cédula no está registrada! </strong></center>');
                }else{
                    if (data == 3) {
                    $("#validando3").hide();
                    $("#boton3").show();
                    $("#error3").show();
                    $("#error3").html('<br><center><strong> ¡No hemos podidos enviar tus datos de acceso, intente más tarde! </strong></center>');
                }else{
                    $("#validando3").hide();                
                    $("#boton3").show();                
                    $("#error3").show();
                    $("#error3").html('<br><center><p style="color: red;">Hemos enviado tus datos de acceso a <strong style="color: black;">' + data + '</strong></p></center>');                    
                }
                }
                
            }
        }
    });
    return false; // Evitar ejecutar el submit del formulario. 
}