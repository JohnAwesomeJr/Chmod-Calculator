let or = document.getElementById("owner['read']");
let ow = document.getElementById("owner['wright']");
let oe = document.getElementById("owner['execute']");

let gr = document.getElementById("group['read']");
let gw = document.getElementById("group['wright']");
let ge = document.getElementById("group['execute']");

let pr = document.getElementById("public['read']");
let pw = document.getElementById("public['wright']");
let pe = document.getElementById("public['execute']");

let output = document.getElementById("output")
let total = "000";
let totalWithZeros = "";






function runCheck(itemId) {
    let id = document.getElementById(itemId);

    if (id.checked == true) {
        total = total + parseInt(id.value);
    } else {
        total = total - parseInt(id.value);
    }
    update();
}







function update() {
    totalWithZeros = pad(total, 3);
    output.value = totalWithZeros;
}



function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
