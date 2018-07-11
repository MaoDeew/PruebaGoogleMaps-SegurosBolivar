function button_pueblo1() {
  
$.ajax({
    url: "https://www.datos.gov.co/resource/2iib-k5k9.json",
    type: "GET",
    data: {
      "$limit" : 15000,
      "$$app_token" : "z9el58sEpnW3SQogcmt35ywMp"
    }
}).done(function(datos) {
  console.log("Retrieved " + datos.length + " records from the dataset!");
  console.log(datos);

  var contenidoHtml = "";
  contenidoHtml += "<h4 align='center'>Se encontraron "+datos.length+" profesores en: Abejorral, Antioquia</h4>";
  contenidoHtml += "<table id='tablaResultado' border='1' >";
  contenidoHtml += "<thead>"
  contenidoHtml += "<tr align='center'>";
    contenidoHtml += "<th>Nombre Profesor</td>";
    contenidoHtml += "<th>Correo</td>";
    contenidoHtml += "<th>Sede</td>";
    contenidoHtml += "</tr>";
    contenidoHtml += "</thead>";

  $.each(datos, function(i, profesor){

    contenidoHtml += "<tr>";
    contenidoHtml += "<td><p>"+profesor.nombres+"</p></td>";
    contenidoHtml += "<td><p>"+profesor.correo_electr_nico+"</p></td>"
    contenidoHtml += "<td><p>"+profesor.instituci_n_educativa+"</p></td>";
    contenidoHtml += "</tr>";

  });

  contenidoHtml += "</table>";

  $("#tablaProfesores").html(contenidoHtml);


  $(document).ready(function(){
    $('#tablaResultado').DataTable({
      "pagingType": "full_numbers",
      "paging" : true,
      "scrollY":        "500px",
      "language": {
        "search": "Buscar",
            "lengthMenu": "Mostrar _MENU_ profesores por página",
            "zeroRecords": "No se encuentra con esa especificación - lo sentimos",
            "info": "Mostrando pagina _PAGE_ de _PAGES_ profesores",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtrado de _MAX_ profesores)",
            "paginate": {
              "first": "Primera",
              "previous": "Anterior",
              "next": "Siguiente",
              "last": "Última"
    }
        },
      "aoColumns": [
            null,
            null,
            null
        ]
    });
});

});

}

function button_pueblo2() {
  
$.ajax({
    url: "https://www.datos.gov.co/resource/63ir-87ds.json",
    type: "GET",
    data: {
      "$limit" : 15000,
      "$$app_token" : "z9el58sEpnW3SQogcmt35ywMp"
    }
}).done(function(datos) {
  console.log("Retrieved " + datos.length + " records from the dataset!");
  console.log(datos);

  var contenidoHtml = "";
  contenidoHtml += "<h4 align='center'>Se encontraron "+datos.length+" profesores en: San Andrés de Cuerquía, Antioquia</h4>";
  contenidoHtml += "<table id='tablaResultado' border='1' >";
  contenidoHtml += "<thead>"
  contenidoHtml += "<tr align='center'>";
    contenidoHtml += "<th>Nombre Profesor</td>";
    contenidoHtml += "<th>Correo</td>";
    contenidoHtml += "<th>Sede</td>";
    contenidoHtml += "</tr>";
    contenidoHtml += "</thead>";

  $.each(datos, function(i, profesor){

    contenidoHtml += "<tr>";
    contenidoHtml += "<td><p>"+profesor.nombres+"</p></td>";
    contenidoHtml += "<td><p>"+profesor.correo+"</p></td>"
    contenidoHtml += "<td><p>"+profesor.instituci_n_educativa+"</p></td>";
    contenidoHtml += "</tr>";

  });

  contenidoHtml += "</table>";

  $("#tablaProfesores").html(contenidoHtml);


  $(document).ready(function(){
    $('#tablaResultado').DataTable({
      "pagingType": "full_numbers",
      "paging" : true,
      "scrollY":        "500px",
      "language": {
        "search": "Buscar",
            "lengthMenu": "Mostrar _MENU_ profesores por página",
            "zeroRecords": "No se encuentra con esa especificación - lo sentimos",
            "info": "Mostrando pagina _PAGE_ de _PAGES_ profesores",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtrado de _MAX_ profesores)",
            "paginate": {
              "first": "Primera",
              "previous": "Anterior",
              "next": "Siguiente",
              "last": "Última"
    }
        },
      "aoColumns": [
            null,
            null,
            null
        ]
    });
});

});

}

function button_pueblo3() {

$.ajax({
    url: "https://www.datos.gov.co/resource/y3r7-mvrw.json",
    type: "GET",
    data: {
      "$limit" : 15000,
      "$$app_token" : "z9el58sEpnW3SQogcmt35ywMp"
    }
}).done(function(datos) {
  console.log("Retrieved " + datos.length + " records from the dataset!");
  console.log(datos);

  var contenidoHtml = "";
  contenidoHtml += "<h4 align='center'>Se encontraron "+datos.length+" profesores en: SantaCruz, Nariño</h4>";
  contenidoHtml += "<table id='tablaResultado' border='1' >";
  contenidoHtml += "<thead>"
  contenidoHtml += "<tr align='center'>";
    contenidoHtml += "<th>Nombre Profesor</td>";
    contenidoHtml += "<th>Codigo DANE</td>";
    contenidoHtml += "<th>Sede</td>";
    contenidoHtml += "</tr>";
    contenidoHtml += "</thead>";

  $.each(datos, function(i, profesor){

    contenidoHtml += "<tr>";
    contenidoHtml += "<td><p>"+profesor.nombres_y_apellidos+"</p></td>";
    contenidoHtml += "<td><p>"+profesor.codigo_alterno_dane+"</p></td>"
    contenidoHtml += "<td><p>"+profesor.establecimiento_educativo+"</p></td>";
    contenidoHtml += "</tr>";

  });

  contenidoHtml += "</table>";

  $("#tablaProfesores").html(contenidoHtml);


  $(document).ready(function(){
    $('#tablaResultado').DataTable({
      "pagingType": "full_numbers",
      "paging" : true,
      "scrollY":        "500px",
      "language": {
        "search": "Buscar",
            "lengthMenu": "Mostrar _MENU_ profesores por página",
            "zeroRecords": "No se encuentra con esa especificación - lo sentimos",
            "info": "Mostrando pagina _PAGE_ de _PAGES_ profesores",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtrado de _MAX_ profesores)",

            "paginate": {
              "first": "Primera",
              "previous": "Anterior",
              "next": "Siguiente",
              "last": "Última"
    }
        },
      "aoColumns": [
            null,
            null,
            null
        ]
    });
});

});


}


function button_pueblo4() {
  
$.ajax({
    url: "https://www.datos.gov.co/resource/xm8w-7uvx.json",
    type: "GET",
    data: {
      "$limit" : 15000,
      "$$app_token" : "z9el58sEpnW3SQogcmt35ywMp"
    }
}).done(function(datos) {
  console.log("Retrieved " + datos.length + " records from the dataset!");
  console.log(datos);

  var contenidoHtml = "";
  contenidoHtml += "<h4 align='center'>Se encontraron "+datos.length+" profesores en: San Juanito, Meta</h4>";
  contenidoHtml += "<table id='tablaResultado' border='1' >";
  contenidoHtml += "<thead>"
  contenidoHtml += "<tr align='center'>";
    contenidoHtml += "<th>Nombre Profesor</td>";
    contenidoHtml += "<th>Correo</td>";
    contenidoHtml += "<th>Sede</td>";
    contenidoHtml += "</tr>";
    contenidoHtml += "</thead>";

  $.each(datos, function(i, profesor){

    contenidoHtml += "<tr>";
    contenidoHtml += "<td><p>"+profesor.nombredeldocente+"</p></td>";
    contenidoHtml += "<td><p>"+profesor.correoelectronico+"</p></td>"
    contenidoHtml += "<td><p>"+profesor.sede+"</p></td>";
    contenidoHtml += "</tr>";

  });

  contenidoHtml += "</table>";

  $("#tablaProfesores").html(contenidoHtml);


  $(document).ready(function(){
    $('#tablaResultado').DataTable({
      "pagingType": "full_numbers",
      "paging" : true,
      "scrollY":        "500px",
      "language": {
        "search": "Buscar",
            "lengthMenu": "Mostrar _MENU_ profesores por página",
            "zeroRecords": "No se encuentra con esa especificación - lo sentimos",
            "info": "Mostrando pagina _PAGE_ de _PAGES_ profesores",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtrado de _MAX_ profesores)",
            "paginate": {
              "first": "Primera",
              "previous": "Anterior",
              "next": "Siguiente",
              "last": "Última"
    }
        },
      "aoColumns": [
            null,
            null,
            null
        ]
    });
});

});

}

function limpiarTabla(){

  $(document).ready(function(){
    
    $('#tablaProfesores').empty();


});

}