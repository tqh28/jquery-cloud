var default_content = "";

$(document).ready(function () {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    loadStudent("https://tqh28-spring-rest-api.herokuapp.com/students/" + id);

});

function loadStudent(url) {

    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            var dataObject = JSON.parse(data);
            document.getElementById("name").innerHTML = dataObject.name;
            document.getElementById("identityNumber").innerHTML = dataObject.identityNumber;
            document.getElementById("dob").innerHTML = dataObject.dob;
            document.getElementById("gender").innerHTML = dataObject.gender;
        }

    });

}
