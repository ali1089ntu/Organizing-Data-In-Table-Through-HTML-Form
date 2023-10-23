
let radioval;
let body1 = '';
let name1 = document.getElementById("fullName");
let email1 = document.getElementById("email");
let city1 = document.getElementById("city");
let age1 = document.getElementById("age");
let rd = document.getElementsByClassName("radiobtns");

const createtbl = () => {
    
    event.preventDefault();
    let convertarr = Array.from(rd);
    convertarr.forEach((input)=>{
        let checked = input.checked;
        if (checked){
            radioval = input.value;
        }
    });

    let start =  `<table id="table1">`;
    let head1 = `<thead><tr id="theadr"><th class="p-3">Name</th><th class="p-3">Email</th><th class="p-3">City</th><th class="p-3">Age</th><th class="p-3">Gender</th></tr></thead>`;
    body1 += `<tbody> <tr id="tbodyr"> <td class="p-3">${name1.value}</td> <td class="p-3">${email1.value}</td> <td class="p-3">${city1.value}</td> <td class="p-3">${age1.value}</td> <td class="p-3">${radioval}</td> </tr> </tbody>`;
    let foot1 = `<tfoot style="color:white;"><tr><th colspan="5">Data of FSc Students</th></tr></tfoot>`;
    let end = `</table>`;

    let combine = start + head1 + body1 + foot1 + end;
 
    document.getElementById("box1").innerHTML = combine;

}
