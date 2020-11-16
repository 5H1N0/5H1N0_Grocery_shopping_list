function ajax(){

    let departments = document.getElementById("departments");
    

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
    // condition
    if(this.readyState==4 && this.status==200){
        var response = JSON.parse(this.responseText); //Access the object
        var list = response.grocery;  // access the array in the object

        var output = "";

        for(let i=0;i<list.length;i++){
            if(departments.value == "All"){

                output += "<tr><td>" + list[i].slno + "</td>";
                output += "<td>" + list[i].name + "</td>";
                output += "<td>" + list[i].qty + "</td>";
                output += "<td>" + list[i].unit + "</td>";
                output += "<td>" + list[i].department + "</td>";
                output += "<td>" + list[i].notes + "</td></tr>";

            }
            else if(departments.value == list[i].department){
                output += "<tr><td>" + list[i].slno + "</td>";
                output += "<td>" + list[i].name + "</td>";
                output += "<td>" + list[i].qty + "</td>";
                output += "<td>" + list[i].unit + "</td>";
                output += "<td>" + list[i].department + "</td>";
                output += "<td>" + list[i].notes + "</td></tr>";
            }
        }

        document.getElementById("table").innerHTML = output;
    }
    
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}