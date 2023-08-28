function fomr_submitted(event) {
    event.preventDefault();
    let val = document.getElementById("name").value;
    alert("Hy " + val)    ;
}
