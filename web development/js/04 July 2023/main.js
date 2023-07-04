// i/o statments
var x = prompt("Please Put Number 1: ");
var y = prompt("Please Put Number 2: ");

x = parseFloat(x)
y = parseFloat(y)

var flag = true

// conditional statments
if (!x) {
    alert("Number 1 could not be empty")
    flag = false
}

if (!y) {
    alert("Number 2 could not be empty")
    flag = false
}

if(flag){ 
    document.write("<pre> Sum         = ", x+y);
    document.write("<br> Diff        = ", x-y);
    document.write("<br> Product     = ", x*y);
    document.write("<br> Division    = ", x/y);
    document.write("<br> Mod         = ", x%y);
    document.write("<br> Square of x = ", x*x);
    document.write("<br> My Name is Khan");
    document.write("& i am not a Terrorist</pre>");
}

// repetational statments
for (var i = 1; i < 11; i++) {
    document.write(x, " X ", i, "=", x*i, "<br>")
}


document.write("<a href='./main.js'>Load Js</a>")