function add() {

    erreurMsg = document.getElementById("erreurMsg");
    erreurMsg.classList.add("d-none");

    var xhttp = new XMLHttpRequest();
    var token = "D@lL@5Mùl!P@5S3"
    xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php", true);

    // Récupération des informations de l'utilisateur à rentrer dans l'API
    let numero_chambre = document.getElementById("numero_chambre").value;
    type_chambre = document.getElementById("type_chambre").value;
    date_entree = document.getElementById("date_entree").value;
    date_sortie = document.getElementById("date_sortie").value;
    vue = document.getElementById("type_vue").value;
    
    // Vérifiez si tous les champs sont remplis
    if (type_chambre.trim() === '' || date_entree.trim() === '' || date_sortie.trim() === '' || vue.trim() === '') {

        erreurMsg = document.getElementById("erreurMsg");
        erreurMsg.classList.remove("d-none");
        erreurMsg.innerHTML = 'Tout les champs du formulaires doivent être remplis.';
    } else {
        var params =
        "service=gite&object=roomreservation&action=create" + "&token=" + token + "&landscape=" +  
            "&idRoom=" + numero_chambre + 
         
            "&dateEntree=" + date_entree +
            "&dateSortie=" + date_sortie  ;
        console.log(params)
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
        xhttp.send(params);
    
        xhttp.onreadystatechange = function () {
            // If the request completed, close the extension popup
            if (xhttp.readyState == 4) {
                document.getElementById("modalmodify").classList.remove("show");
                document.getElementById("modalmodify").setAttribute("aria-modal", false);
                document
                  .getElementById("modalmodify")
                  .setAttribute("style", "display: none");
                document.body.classList.remove("modal-open");
                document.body.style.removeProperty("padding-right");
                var backdrops = document.getElementsByClassName("modal-backdrop");
                for (var i = 0; i < backdrops.length; i++) {
                  backdrops[i].parentNode.removeChild(backdrops[i]);
                }
          
                valideMsg = document.getElementById("valideReserve");
                valideMsg.classList.remove("d-none");
                valideMsg.innerHTML = 'Votre réservation pour "' + type_chambre + '" avec vue ' + vue + ' du ' + date_entree + ' au ' + date_sortie + ' a bien été enregistrée.';
            }
    
        };
    
        return false;
    }

    
}