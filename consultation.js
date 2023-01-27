var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {


            var recup = JSON.parse(xhttp.responseText);
        


            //             -------------
            var table = document.createElement("table");
            table.classList.add('table');
            table.setAttribute('id', 'table');


            //                 Header
            var row = table.insertRow(-1);
            
            // id
            headerCell = document.createElement("th");
            headerCell.innerHTML = "Id";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');



            //              Type
            headerCell = document.createElement("th");
            headerCell.innerHTML = "Hebergement";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');

            //              Vue
            headerCell = document.createElement("th");
            headerCell.innerHTML = "Type de vue";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');

            //              Reserver
            headerCell = document.createElement("th");
            headerCell.innerHTML = "date Entrée";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');

            headerCell = document.createElement("th");
            headerCell.innerHTML = "date Sortie";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');



            //Add the data rows.
            for (var i = 0; i < recup.length; i++) {
                //     Row
                var row = table.insertRow(-1);


                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].id;

                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].type;

                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].landscape;

                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].dateEntree;

                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].dateSortie;







        
            }


            var dvTable = document.getElementById("tab");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);

        }
    } if (this.status == 404) {
        alert("erreur 404");

    }
}

let url = ' https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomreservation&action=list';
xhttp.open('GET', url, true);

xhttp.send();

var xtp = new XMLHttpRequest();

xtp.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {


            var recup = JSON.parse(xtp.responseText);
        


            //             -------------
            var table = document.createElement("table");
            table.classList.add('table');
            table.setAttribute('id', 'table');


            //                 Header
            var row = table.insertRow(-1);
            
            // id
            headerCell = document.createElement("th");
            headerCell.innerHTML = "Id";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');



            //              Type
            headerCell = document.createElement("th");
            headerCell.innerHTML = "Type activite";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');

            //              Vue
            headerCell = document.createElement("th");
            headerCell.innerHTML = "date";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');

            //              Reserver
            headerCell = document.createElement("th");
            headerCell.innerHTML = "Heure Entree";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');

            headerCell = document.createElement("th");
            headerCell.innerHTML = "Heure Sortie";
            row.appendChild(headerCell);
            headerCell.classList.add('table-dark');


            //Add the data rows.
            for (var i = 0; i < recup.length; i++) {
                //     Row
                var row = table.insertRow(-1);


                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].id;

                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].activite;

                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].date;

                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].heureDebut;

                cell = row.insertCell(-1);
                cell.innerHTML = recup[i].heureFin;
     







        
            }


            var dvTable = document.getElementById("tab2");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);

        }
    } if (this.status == 404) {
        alert("erreur 404");

    }
}

let ur = ' https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activityreservation&action=list';
xtp.open('GET', ur, true);

xtp.send();