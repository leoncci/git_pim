function add() {




    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=room&action=list", true);

    // Récupération des informations de l'utilisateur à rentrer dans l'API
    firstName = document.getElementById("post_firstname").value;
    lastName = document.getElementById("post_lastname").value;
    jobTitle = document.getElementById("post_jobtitle").value;
    email = document.getElementById("post_email").value;
    //
    var params =
        "&name=" + firstName +
        "&last_name=" + lastName +
        "&job_title=" + jobTitle +
        "&email=" + email;

    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Content-length", params.length);
    xhttp.setRequestHeader("Connection", "close");

    xhttp.send(params);

    xhttp.onreadystatechange = function () {
        // If the request completed, close the extension popup
        if (xhttp.readyState == 4) {


        }


    };

    return false;
}