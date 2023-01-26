function getByID(numb) {
   

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
               

                var recup = JSON.parse(xhttp.responseText);
           


                for (var i = 0; i < recup.length; i++) {
            
                    if (recup[i].id == numb) {
                        // Récupération des différentes informations par rapport à l'ID
                        
                        document.getElementById("numero_chambre").value = numb
                        document.getElementById("type_chambre").value = recup[i].type
                        document.getElementById("type_vue").value = recup[i].landscape
                    }
                }
            }
        }
    }

    let url = ' https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=room&action=list';
    xhttp.open('GET', url, true)
    xhttp.send();

}
