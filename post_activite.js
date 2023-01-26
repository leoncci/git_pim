function modalKanoe(){
    reservationBtn = document.getElementById("reservation_kanoe")
    reservationBtn.setAttribute('data-target', '#modalmodify')
    reservationBtn.setAttribute('data-toggle', 'modal')
    reservationBtn.setAttribute('type', 'button')

    document.getElementById("activite").value = "Kanoé"


}
function modalRandonee(){
    reservationBtn = document.getElementById("reservation_randonee")
    reservationBtn.setAttribute('data-target', '#modalmodify')
    reservationBtn.setAttribute('data-toggle', 'modal')
    reservationBtn.setAttribute('type', 'button')

    document.getElementById("activite").value = "Randonnée"


}
function modalPlongee(){
    reservationBtn = document.getElementById("reservation_plongee")
    reservationBtn.setAttribute('data-target', '#modalmodify')
    reservationBtn.setAttribute('data-toggle', 'modal')
    reservationBtn.setAttribute('type', 'button')

    document.getElementById("activite").value = "Plongée"


}
function modalDejeuner(){
    reservationBtn = document.getElementById("reservation_dejeuner")
    reservationBtn.setAttribute('data-target', '#modalmodify')
    reservationBtn.setAttribute('data-toggle', 'modal')
    reservationBtn.setAttribute('type', 'button')

    document.getElementById("activite").value = "Déjeuner"


}
function modalDiner(){
    reservationBtn = document.getElementById("reservation_diner")
    reservationBtn.setAttribute('data-target', '#modalmodify')
    reservationBtn.setAttribute('data-toggle', 'modal')
    reservationBtn.setAttribute('type', 'button')

    document.getElementById("activite").value = "Dîner"


}

function add() {




    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php", true);

    // Récupération des informations de l'utilisateur à rentrer dans l'API
    var token = "D@lL@5Mùl!P@5S3"
    date = document.getElementById("date").value;
    activite = document.getElementById("activite").value;
    heure_debut = document.getElementById("heure_debut").value;
    heure_fin = document.getElementById("heure_fin").value;
    heure_debut = heure_debut + ":00";
    heure_fin = heure_fin + ":00";


    //
    var params =
    "service=gite&object=activityreservation&action=create" + "&token=" + token + "&activite=" +  activite +
        "&date=" + date + 
     
        "&heureDebut=" + heure_debut +
        "&heureFin=" + heure_fin  ;
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