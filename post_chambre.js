function add() {




    var xhttp = new XMLHttpRequest();
    var token = "D@lL@5Mùl!P@5S3"
    xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php", true);

    // Récupération des informations de l'utilisateur à rentrer dans l'API
    let numero_chambre = document.getElementById("numero_chambre").value;
    type_chambre = document.getElementById("type_chambre").value;
    date_entree = document.getElementById("date_entree").value;
    date_sortie = document.getElementById("date_sortie").value;
    vue = document.getElementById("type_vue").value;
    console.log(numero_chambre)
    //
    var params =
    "service=gite&object=roomreservation&action=create" + "&token=" + token + "&landscape=" +  
        "&idRoom=" + numero_chambre + 
     
        "&dateEntree=" + date_entree +
        "&dateSortie=" + date_sortie  ;
    console.log(params)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Content-length", params.length);
     xhttp.setRequestHeader("Connection", "close");

    xhttp.send(params);

    xhttp.onreadystatechange = function () {
        // If the request completed, close the extension popup
        if (xhttp.readyState == 4) {
            modalnone = document.getElementsByClassName("show");
            
            modalnone.style.display = "none";


        }


    };

    return false;
}