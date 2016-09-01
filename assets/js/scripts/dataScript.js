function makeRequest(url) {
  if(typeof window.XMLHttpRequest !== 'undefined') {
    var peticion_http = new XMLHttpRequest();
  }
  else if(typeof window.ActiveXObject !== 'undefined') {
    var peticion_http = new ActiveXObject("Microsoft.XMLHTTP");  //soporte para explorer
  }
  var url = 'http://127.0.0.1:1337/report';
  peticion_http.onreadystatechange = responseData;
  peticion_http.open('GET', url, true);
  peticion_http.send(null);
 
  function responseData() {
    if(peticion_http.readyState === 4) {
      var srtHtml = new String();
      if(peticion_http.status === 200) {
        var respuesta = JSON.parse(peticion_http.responseText);
        console.log(respuesta.reports[0]);
        var i = 0;
        srtHtml = '<tr>'+
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
      } else {
        srtHtml = 'Reports not founds';
        document.getElementById('dataColumn').innerHTML = srtHtml;
      }
    }
  }
}

function getRss() {
  if(typeof window.XMLHttpRequest !== 'undefined') {
    var peticion_http = new XMLHttpRequest();
  }
  else if(typeof window.ActiveXObject !== 'undefined') {
    var peticion_http = new ActiveXObject("Microsoft.XMLHTTP");  //soporte para explorer
  }
  var url = 'http://127.0.0.1:1337/rss';
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
        document.getElementsByClassName('col_izqda')[0].innerHTML = srtHtml[0];
        document.getElementsByClassName('col_centr')[0].innerHTML = srtHtml[1];
        document.getElementsByClassName('col_drcha')[0].innerHTML = srtHtml[2];
      } else {
        srtHtml[0] = 'Notice not found';
        document.getElementsByClassName('col_izqda')[0].innerHTML = srtHtml[0];
        document.getElementsByClassName('col_centr')[0].innerHTML = srtHtml[0];
        document.getElementsByClassName('col_drcha')[0].innerHTML = srtHtml[0];
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
