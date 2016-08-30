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
        document.getElementById('dataColumn').innerHTML = srtHtml;
      }
    }
  }
}

function getRss() {
  if(window.XMLHttpRequest) {
    var peticion_http = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    var peticion_http = new ActiveXObject("Microsoft.XMLHTTP");  //soporte para explorer
  }
  var url = 'http://localhost:1337/rss';
  peticion_http.onreadystatechange = responseData;
  peticion_http.open('GET', url, true);
  peticion_http.send(null);
 
  function responseData() {
    if(peticion_http.readyState === 4) {
      if(peticion_http.status === 200) {
        var respuesta = JSON.parse(peticion_http.responseText);
        console.log(respuesta[0].title);
        var i = 0;
        var srtHtml = [];
        for (i; i < respuesta.length; i++) {
          srtHtml[i] = '<h3>' + respuesta[i].title + '</h3>'+
          '<span>' + respuesta[i].content + '</span>';
        }
        document.getElementById('col_izqda').innerHTML = srtHtml[0];
        document.getElementById('col_centr').innerHTML = srtHtml[1];
        document.getElementById('col_drcha').innerHTML = srtHtml[2];
      }
    }
  }
}

$(document).ready(function(){
  $('#notices').click(function() {
    $("#descriptionContainer").load("../../templates/layoutNotice.html", function() {
      getRss();
    });
  });

  $('#reports').click(function() {
    $("#descriptionContainer").load("../../templates/layoutReport.html");
  });
  
  $('#perfil').click(function() {
    $("#descriptionContainer").load("skills.html");
  });
});
