var default_content = "";

$(document).ready(function () {

    loadStudents("https://tqh28-spring-rest-api.herokuapp.com/students");

});

function loadStudents(url) {

    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            var dataObjects = JSON.parse(data);
            var tableBody = document.getElementById('students-table-body');

            var studentNumber = dataObjects.length;
            var student;
            for (var i = 0; i < studentNumber; i++) {
                student = dataObjects[i];
                var tr = document.createElement('TR');
                tableBody.appendChild(tr);

                var td = document.createElement('TD');
                td.appendChild(document.createTextNode(student.id));
                tr.appendChild(td);

                td = document.createElement('TD');
                td.appendChild(document.createTextNode(student.name));
                tr.appendChild(td);
                
                td = document.createElement('TD');
                td.appendChild(document.createTextNode(student.gender));
                tr.appendChild(td);

                td = document.createElement('TD');
                var a = document.createElement('a');  
                var link = document.createTextNode("Detail"); 
                a.appendChild(link);  
                a.title = "This is Link"; 
                a.href = "student-detail.html?id=" + student.id;  
                td.appendChild(a);
                tr.appendChild(td);
            }
            // console.log(msg);
        }

    });

}