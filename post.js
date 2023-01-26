function add() {




    var xhttp = new XMLHttpRequest();
    var token = "D@lL@5Mùl!P@5S3"
    xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomreservation&action=create", true);

    // Récupération des informations de l'utilisateur à rentrer dans l'API
    numero_chambre = document.getElementById("numero_chambre").value;
    type_chambre = document.getElementById("type_chambre").value;
    date_entree = document.getElementById("date_entree").value;
    date_sortie = document.getElementById("date_sortie").value;
    //
    var params =

        "&idRoom=" + numero_chambre +
        "&dateEntree=" + "2023-12-12" +
        "&dateSortie=" + "2023-2-15" + "&token=" + token;
    console.log(params)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Content-length", params.length);
    xhttp.setRequestHeader("Connection", "close");

    xhttp.send(params);

    xhttp.onreadystatechange = function () {
        // If the request completed, close the extension popup
        if (xhttp.readyState == 4) {
            console.log("test")


        }


    };

    return false;
}