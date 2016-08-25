function makeRequest(url) {
  if(window.XMLHttpRequest) {
    var peticion_http = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    var peticion_http = new ActiveXObject("Microsoft.XMLHTTP");  //soporte para explorer
  }
  var url = 'http://localhost:1337/report';
  peticion_http.onreadystatechange = responseData;
  peticion_http.open('GET', url, true);
  peticion_http.send(null);
 
  function responseData() {
    if(peticion_http.readyState === 4) {
      if(peticion_http.status === 200) {
        var respuesta = JSON.parse(peticion_http.responseText);
        console.log(respuesta.reports[0]);
        var i = 0;
        var srtHtml = '<tr>'+
        '<th>Categoria</th>'+
        '<th>Fecha</th>'+
        '<th>Usuario</th>'+
        '<th>Country</th>'+
        '</tr>';
        for (i; i < respuesta.reports.length; i++) {
          srtHtml += '<tr>'
          srtHtml += '<td>' + respuesta.reports[i].category + '</td>';
          srtHtml += '<td>' + respuesta.reports[i].created_at + '</td>';
          srtHtml += '<td>' + respuesta.reports[i].screen_name + '</td>';
          srtHtml += '<td>' + respuesta.reports[i].country + '</td>';
          srtHtml += '</tr>'
        }
        console.log("html value: ", srtHtml);
        document.getElementById('dataColumn').innerHTML = srtHtml;
      }
    }
  }
}

$(document).ready(function(){
  $('#notices').click(function() {
    $("#descriptionContainer").load("../../templates/layoutNotice.html");
  });
  $('#reports').click(function() {
    $("#descriptionContainer").load("../../templates/layoutReport.html");
  });
  $('#perfil').click(function() {
    $("#descriptionContainer").load("skills.html");
  });
});
