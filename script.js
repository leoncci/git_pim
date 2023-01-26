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


            //              Number
            headerCell = document.createElement("th");
            headerCell.innerHTML = "Numéro du logement";
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
            headerCell.innerHTML = "Réserver";
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
                deletebutton = document.createElement("button");
                cell.appendChild(deletebutton);
                deletebutton.classList.add('btn');
                deletebutton.classList.add('btn-primary');
                deletebutton.setAttribute('data-target', '#modalmodify')
                deletebutton.setAttribute('data-toggle', 'modal')
                deletebutton.setAttribute('type', 'button')


                // deletebutton.setAttribute("onclick", 'del(userid)');
                userid = recup[i].id;

                deletebutton.setAttribute("id", userid);
                deletebutton.onclick = function (event) {
                    



                    // del(event.target.id);
             
                    numb = event.target.id
                    getByID(numb);
  
          
                    
                    
                }



                deletebutton.innerHTML = "réserver";
            }


            var dvTable = document.getElementById("tab");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);

        }
    } if (this.status == 404) {
        alert("erreur 404");

    }
}

let url = ' https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=room&action=list';
xhttp.open('GET', url, true);

xhttp.send();