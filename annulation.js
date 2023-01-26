function modalAnnulation() {
  idDelete = window.prompt("Annuler votre reservation avec votre numéro");

  // confirmation de suppression par l'utilisateur

  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php", true);

  // Récupération des informations de l'utilisateur à rentrer dans l'API
  var token = "D@lL@5Mùl!P@5S3";

  //
  var params =
    "service=gite&object=activityreservation&action=cancel" +
    "&token=" +
    token +
    "&idActivityReservation=" +
    idDelete;
  console.log(params);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.setRequestHeader("Content-length", params.length);
  xhttp.setRequestHeader("Connection", "close");

  xhttp.send(params);

  xhttp.onreadystatechange = function () {
    // If the request completed, close the extension popup
    if (xhttp.readyState == 4) {
      console.log("test");
    }
  };

  return false;
}



function modalAnnulationRoom() {
  idDelete = window.prompt("Annuler votre reservation avec votre numéro");

  // confirmation de suppression par l'utilisateur

  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php", true);

  // Récupération des informations de l'utilisateur à rentrer dans l'API
  var token = "D@lL@5Mùl!P@5S3";

  //
  var params =
    "service=gite&object=roomreservation&action=cancel" +
    "&token=" +
    token +
    "&idRoomReservation=" +
    idDelete;
  console.log(params);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.setRequestHeader("Content-length", params.length);
  xhttp.setRequestHeader("Connection", "close");

  xhttp.send(params);

  xhttp.onreadystatechange = function () {
    // If the request completed, close the extension popup
    if (xhttp.readyState == 4) {
      console.log("test");
    }
  };

  return false;
}

